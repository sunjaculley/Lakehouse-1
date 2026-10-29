import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* ---------- types ---------- */

export type PhotoEdit = {
  rotation?: number;
  hidden?: boolean;
  caption?: string;
  order?: number;
  /** id of an uploaded image that replaces the original */
  replaced?: string;
};

export type AddedPhoto = {
  id: string;
  name: string;
  caption: string;
};

export type Overlay = {
  text: Record<string, string>;
  photos: Record<string, PhotoEdit>;
  added: Record<string, AddedPhoto[]>;
};

const EMPTY: Overlay = { text: {}, photos: {}, added: {} };
const STORAGE_KEY = "ignition-edits-v1";
const MODE_KEY = "ignition-edit-mode";

/* ---------- html sanitiser ---------- */

const ALLOWED = new Set(["STRONG", "B", "EM", "I", "U", "A", "UL", "OL", "LI", "BR", "SPAN", "P", "DIV"]);

export function escapeText(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Keeps a small, safe subset of formatting. Runs in the browser only. */
export function sanitizeHtml(html: string): string {
  if (typeof document === "undefined") return escapeText(html);
  const host = document.createElement("div");
  host.innerHTML = html;

  const walk = (node: Element) => {
    for (const child of Array.from(node.children)) {
      walk(child);
      if (!ALLOWED.has(child.tagName)) {
        child.replaceWith(...Array.from(child.childNodes));
        continue;
      }
      for (const attr of Array.from(child.attributes)) {
        const keep = child.tagName === "A" && attr.name === "href";
        if (!keep) child.removeAttribute(attr.name);
      }
      if (child.tagName === "A") {
        const href = child.getAttribute("href") ?? "";
        if (/^\s*javascript:/i.test(href)) child.removeAttribute("href");
        child.setAttribute("rel", "noreferrer");
      }
      if (child.tagName === "DIV" || child.tagName === "P") {
        // flatten block wrappers browsers insert while typing
        child.replaceWith(document.createElement("br"), ...Array.from(child.childNodes));
      }
    }
  };
  walk(host);
  return host.innerHTML.trim();
}

/** Plain text version, used for search and the change summary. */
export function htmlToText(html: string): string {
  if (typeof document === "undefined") return html.replace(/<[^>]*>/g, "");
  const host = document.createElement("div");
  host.innerHTML = html;
  return (host.textContent ?? "").trim();
}

/* ---------- uploaded image store (IndexedDB) ---------- */

const DB_NAME = "ignition-uploads";
const STORE = "images";

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function putImage(id: string, dataUrl: string) {
  const db = await openDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(dataUrl, id);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function allImages(): Promise<Record<string, string>> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const store = tx.objectStore(STORE);
    const keys = store.getAllKeys();
    const values = store.getAll();
    tx.oncomplete = () => {
      const out: Record<string, string> = {};
      (keys.result as string[]).forEach((k, i) => {
        out[k] = values.result[i] as string;
      });
      resolve(out);
    };
    tx.onerror = () => reject(tx.error);
  });
}

async function clearImages() {
  const db = await openDb();
  await new Promise((resolve) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).clear();
    tx.oncomplete = resolve;
  });
}

export function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

/* ---------- context ---------- */

type Ctx = {
  ready: boolean;
  editing: boolean;
  setEditing: (on: boolean) => void;
  overlay: Overlay;
  images: Record<string, string>;
  setText: (id: string, html: string) => void;
  setPhoto: (id: string, patch: PhotoEdit) => void;
  addPhotos: (galleryKey: string, files: FileList | File[]) => Promise<void>;
  replacePhoto: (id: string, file: File) => Promise<void>;
  discard: () => void;
  changeCount: number;
};

const EditCtx = createContext<Ctx | null>(null);

export function EditProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [editing, setEditingState] = useState(false);
  const [overlay, setOverlay] = useState<Overlay>(EMPTY);
  const [images, setImages] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setOverlay({ ...EMPTY, ...(JSON.parse(raw) as Overlay) });
      setEditingState(localStorage.getItem(MODE_KEY) === "1");
    } catch {
      /* ignore */
    }
    allImages()
      .then(setImages)
      .catch(() => undefined)
      .finally(() => setReady(true));
  }, []);

  const persist = useCallback((next: Overlay) => {
    setOverlay(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* quota — ignore */
    }
  }, []);

  const setEditing = useCallback((on: boolean) => {
    setEditingState(on);
    try {
      localStorage.setItem(MODE_KEY, on ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, []);

  const setText = useCallback(
    (id: string, html: string) => {
      setOverlay((prev) => {
        if (prev.text[id] === html) return prev;
        const next = { ...prev, text: { ...prev.text, [id]: html } };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
    },
    [],
  );

  const setPhoto = useCallback(
    (id: string, patch: PhotoEdit) => {
      setOverlay((prev) => {
        const next = {
          ...prev,
          photos: { ...prev.photos, [id]: { ...prev.photos[id], ...patch } },
        };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
    },
    [],
  );

  const addPhotos = useCallback(
    async (galleryKey: string, files: FileList | File[]) => {
      const list = Array.from(files).filter((f) => f.type.startsWith("image/"));
      const entries: AddedPhoto[] = [];
      for (const file of list) {
        const id = `up-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        const dataUrl = await readFileAsDataUrl(file);
        await putImage(id, dataUrl);
        setImages((prev) => ({ ...prev, [id]: dataUrl }));
        entries.push({ id, name: file.name, caption: "" });
      }
      if (entries.length === 0) return;
      setOverlay((prev) => {
        const next = {
          ...prev,
          added: { ...prev.added, [galleryKey]: [...(prev.added[galleryKey] ?? []), ...entries] },
        };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
    },
    [],
  );

  const replacePhoto = useCallback(
    async (id: string, file: File) => {
      const uploadId = `up-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const dataUrl = await readFileAsDataUrl(file);
      await putImage(uploadId, dataUrl);
      setImages((prev) => ({ ...prev, [uploadId]: dataUrl }));
      setPhoto(id, { replaced: uploadId });
    },
    [setPhoto],
  );

  const discard = useCallback(() => {
    persist(EMPTY);
    setImages({});
    void clearImages();
  }, [persist]);

  const changeCount =
    Object.keys(overlay.text).length +
    Object.keys(overlay.photos).length +
    Object.values(overlay.added).reduce((n, list) => n + list.length, 0);

  const value = useMemo<Ctx>(
    () => ({
      ready,
      editing,
      setEditing,
      overlay,
      images,
      setText,
      setPhoto,
      addPhotos,
      replacePhoto,
      discard,
      changeCount,
    }),
    [ready, editing, setEditing, overlay, images, setText, setPhoto, addPhotos, replacePhoto, discard, changeCount],
  );

  return <EditCtx.Provider value={value}>{children}</EditCtx.Provider>;
}

export function useEdits(): Ctx {
  const ctx = useContext(EditCtx);
  if (!ctx) throw new Error("useEdits must be used inside EditProvider");
  return ctx;
}

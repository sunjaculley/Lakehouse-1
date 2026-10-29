import { zipSync, strToU8 } from "fflate";
import { htmlToText, type Overlay } from "./edits";

export type ChangeLine = { key: string; what: string };

export function describeChanges(overlay: Overlay): ChangeLine[] {
  const lines: ChangeLine[] = [];

  for (const [id, html] of Object.entries(overlay.text)) {
    const text = htmlToText(html);
    lines.push({
      key: id,
      what: `text changed to “${text.length > 90 ? `${text.slice(0, 90)}…` : text}”`,
    });
  }

  for (const [id, edit] of Object.entries(overlay.photos)) {
    const bits: string[] = [];
    if (edit.rotation) bits.push(`rotated ${((edit.rotation % 360) + 360) % 360}°`);
    if (edit.hidden) bits.push("hidden");
    if (edit.caption !== undefined) bits.push(`caption “${edit.caption}”`);
    if (edit.order !== undefined) bits.push("moved");
    if (edit.replaced) bits.push("photo replaced");
    if (bits.length) lines.push({ key: id, what: bits.join(", ") });
  }

  for (const [galleryKey, added] of Object.entries(overlay.added)) {
    if (added.length) {
      lines.push({
        key: galleryKey,
        what: `${added.length} photo${added.length > 1 ? "s" : ""} added`,
      });
    }
  }

  return lines;
}

function dataUrlToBytes(dataUrl: string): Uint8Array {
  const base64 = dataUrl.slice(dataUrl.indexOf(",") + 1);
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function extFor(dataUrl: string): string {
  const match = /^data:image\/([a-z0-9.+-]+)/i.exec(dataUrl);
  const type = (match?.[1] ?? "png").toLowerCase();
  return type === "jpeg" ? "jpg" : type;
}

/** Builds the single change file: edits plus any uploaded photos. */
export function buildChangeZip(overlay: Overlay, images: Record<string, string>): Blob {
  const used = new Set<string>();
  for (const edit of Object.values(overlay.photos)) if (edit.replaced) used.add(edit.replaced);
  for (const list of Object.values(overlay.added)) for (const item of list) used.add(item.id);

  const files: Record<string, Uint8Array> = {};
  const fileNames: Record<string, string> = {};

  for (const id of used) {
    const dataUrl = images[id];
    if (!dataUrl) continue;
    const name = `photos/${id}.${extFor(dataUrl)}`;
    fileNames[id] = name;
    files[name] = dataUrlToBytes(dataUrl);
  }

  const manifest = {
    version: 1,
    createdAt: new Date().toISOString(),
    text: overlay.text,
    photos: overlay.photos,
    added: overlay.added,
    files: fileNames,
  };

  const summary = [
    "# Changes to apply",
    "",
    ...describeChanges(overlay).map((line) => `- ${line.key} — ${line.what}`),
    "",
  ].join("\n");

  files["changes.json"] = strToU8(JSON.stringify(manifest, null, 2));
  files["summary.md"] = strToU8(summary);

  return new Blob([zipSync(files) as unknown as BlobPart], { type: "application/zip" });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

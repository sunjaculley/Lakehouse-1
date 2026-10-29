import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { RefPhoto } from "@/content/types";
import { useEdits } from "@/lib/edits";

type Item = {
  key: string;
  ref: string;
  caption: string;
  src: string;
  rotation: number;
  hidden: boolean;
  added: boolean;
};

export function Gallery({ photos, galleryKey }: { photos: RefPhoto[]; galleryKey?: string }) {
  const { editing, overlay, images, setPhoto, addPhotos, replacePhoto } = useEdits();
  const [index, setIndex] = useState<number | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const touchStart = useRef<number | null>(null);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const replaceFor = useRef<string | null>(null);
  const replaceInput = useRef<HTMLInputElement | null>(null);

  const items = useMemo<Item[]>(() => {
    const base = galleryKey ?? "";
    const mapped: Array<Item & { order: number }> = photos.map((photo, i) => {
      const key = `${base}/${photo.ref || i}`;
      const edit = base ? overlay.photos[key] : undefined;
      return {
        key,
        ref: photo.ref,
        caption: edit?.caption ?? photo.caption,
        src: edit?.replaced ? (images[edit.replaced] ?? photo.src) : photo.src,
        rotation: edit?.rotation ?? 0,
        hidden: !!edit?.hidden,
        added: false,
        order: edit?.order ?? i,
      };
    });

    const extra = base ? (overlay.added[base] ?? []) : [];
    extra.forEach((photo, i) => {
      const key = `${base}/add:${photo.id}`;
      const edit = overlay.photos[key];
      mapped.push({
        key,
        ref: `new-${i + 1}`,
        caption: edit?.caption ?? photo.caption ?? photo.name,
        src: images[photo.id] ?? "",
        rotation: edit?.rotation ?? 0,
        hidden: !!edit?.hidden,
        added: true,
        order: edit?.order ?? photos.length + i,
      });
    });

    return mapped
      .sort((a, b) => a.order - b.order)
      .filter((p) => p.src !== "")
      .filter((p) => editing || !p.hidden);
  }, [photos, overlay, images, editing, galleryKey]);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setIndex((current) =>
        current === null ? null : (current + delta + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, step]);

  const move = (item: Item, delta: number) => {
    const from = items.findIndex((p) => p.key === item.key);
    const to = from + delta;
    if (from < 0 || to < 0 || to >= items.length) return;
    const other = items[to]!;
    // Swap the two positions; every other photo keeps its place.
    const a = overlay.photos[item.key]?.order ?? from;
    const b = overlay.photos[other.key]?.order ?? to;
    setPhoto(item.key, { order: b });
    setPhoto(other.key, { order: a });
  };



  if (items.length === 0 && !(editing && galleryKey)) return null;

  const open = index === null ? null : items[index];

  return (
    <>
      {items.length > 0 ? (
        <div className={items.length === 1 ? "gallery gallery--single" : "gallery"}>
          {items.map((photo, i) => (
            <figure
              key={photo.key}
              className={photo.hidden ? "gallery__item gallery__item--hidden" : "gallery__item"}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open photo ${photo.ref}: ${photo.caption}`}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  style={photo.rotation ? { transform: `rotate(${photo.rotation}deg)` } : undefined}
                  className={photo.rotation % 180 !== 0 ? "is-turned" : undefined}
                />
              </button>

              {editing ? (
                <div className="phototools">
                  <button type="button" title="Rotate left" onClick={() => setPhoto(photo.key, { rotation: photo.rotation - 90 })}>
                    ↺
                  </button>
                  <button type="button" title="Rotate right" onClick={() => setPhoto(photo.key, { rotation: photo.rotation + 90 })}>
                    ↻
                  </button>
                  <button type="button" title="Move earlier" onClick={() => move(photo, -1)}>
                    ←
                  </button>
                  <button type="button" title="Move later" onClick={() => move(photo, 1)}>
                    →
                  </button>
                  <button
                    type="button"
                    title={photo.hidden ? "Show again" : "Hide"}
                    onClick={() => setPhoto(photo.key, { hidden: !photo.hidden })}
                  >
                    {photo.hidden ? "Show" : "Hide"}
                  </button>
                  <button
                    type="button"
                    title="Replace photo"
                    onClick={() => {
                      replaceFor.current = photo.key;
                      replaceInput.current?.click();
                    }}
                  >
                    Replace
                  </button>
                </div>
              ) : null}

              <figcaption>
                {photo.ref ? <span className="gallery__ref">{photo.ref}</span> : null}
                {editing ? (
                  <input
                    className="phototools__caption"
                    value={photo.caption}
                    placeholder="Caption"
                    onChange={(e) => setPhoto(photo.key, { caption: e.target.value })}
                  />
                ) : (
                  photo.caption
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      {editing && galleryKey ? (
        <div
          className={dragOver ? "dropzone dropzone--over" : "dropzone"}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            void addPhotos(galleryKey, e.dataTransfer.files);
          }}
        >
          <button type="button" className="btn btn--ghost" onClick={() => fileInput.current?.click()}>
            Add photo
          </button>
          <span>or drop pictures here</span>
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={(e) => {
              if (e.target.files) void addPhotos(galleryKey, e.target.files);
              e.target.value = "";
            }}
          />
          <input
            ref={replaceInput}
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              const file = e.target.files?.[0];
              const key = replaceFor.current;
              if (file && key) void replacePhoto(key, file);
              replaceFor.current = null;
              e.target.value = "";
            }}
          />
        </div>
      ) : null}

      {open ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${open.ref} ${open.caption}`}
          onClick={close}
          onTouchStart={(e) => {
            touchStart.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            const start = touchStart.current;
            const end = e.changedTouches[0]?.clientX ?? null;
            if (start !== null && end !== null && Math.abs(end - start) > 45) {
              step(end < start ? 1 : -1);
            }
            touchStart.current = null;
          }}
        >
          <button type="button" className="lightbox__close" onClick={close}>
            Close
          </button>

          {items.length > 1 ? (
            <button
              type="button"
              className="lightbox__arrow lightbox__arrow--prev"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
            >
              &#8249;
            </button>
          ) : null}

          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img
              src={open.src}
              alt={open.caption}
              style={open.rotation ? { transform: `rotate(${open.rotation}deg)` } : undefined}
            />
            <figcaption>
              {open.ref ? <span className="lightbox__ref">{open.ref}</span> : null}
              <span>{open.caption}</span>
              <span className="lightbox__count">
                {(index ?? 0) + 1} of {items.length}
              </span>
            </figcaption>
          </figure>

          {items.length > 1 ? (
            <button
              type="button"
              className="lightbox__arrow lightbox__arrow--next"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
            >
              &#8250;
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

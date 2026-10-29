import { img } from "./media";
import type { Page, RefPhoto, SectionPhoto } from "./types";
import { photoRef } from "./types";

/** Photos that belong to program pages and reset checklists, keyed by page#section. */
const raw: Record<string, SectionPhoto[]> = {
  "badges#badges": [{ file: "image50", caption: "Name badge and lanyard" }],
  "meeting-space#setup": [
    { file: "image52", caption: "Lakehouse 1st level layout" },
    { file: "image53", caption: "Lakehouse 2nd level layout — Innovation Lab (PE203)" },
  ],
  "materials-and-supplies#ignition-stock": [
    { file: "image51", caption: "Ignition supply closet organisation" },
  ],
  "room-setups#innovation-lab-sets": [
    { file: "image81", caption: "Innovation Lab set-up #1 — plenary only" },
    { file: "image83", caption: "Innovation Lab set-up #2 — plenary and breakouts" },
    { file: "image85", caption: "Innovation Lab set-up #4 — 0–20 people" },
    { file: "image86", caption: "Innovation Lab set-up #5 — 20–30 people" },
    { file: "image87", caption: "Innovation Lab set-up #6A — 30–40 people" },
    { file: "image88", caption: "Innovation Lab set-up #6B — 30–40 people" },
  ],
  "room-setups#classroom-sets": [
    { file: "image142", caption: "Single classroom — pod of 6" },
    { file: "image144", caption: "Single classroom — extended U-shape" },
    { file: "image146", caption: "Double classroom — pod of 6" },
    { file: "image147", caption: "Double classroom — with banquet seating" },
  ],

  "reset:innovation-lab": [
    { file: "image90", caption: "How the Innovation Lab should be left" },
    { file: "image91", caption: "How the Innovation Lab should be left" },
    { file: "image92", caption: "How the Innovation Lab should be left" },
    { file: "image93", caption: "How the Innovation Lab should be left" },
    { file: "image94", caption: "How the Innovation Lab should be left" },
    { file: "image95", caption: "How the Innovation Lab should be left" },
  ],
  "reset:living-labs": [
    { file: "image109", caption: "How the Living Lab should be left" },
    { file: "image110", caption: "How the Living Lab should be left" },
    { file: "image111", caption: "How the Living Lab should be left" },
    { file: "image112", caption: "How the Living Lab should be left" },
    { file: "image113", caption: "How the Living Lab should be left" },
  ],
  "reset:story-lab": [{ file: "image115", caption: "The Story Lab booth at rest" }],
};

function withRefs(photos: SectionPhoto[], base: string): RefPhoto[] {
  return photos
    .map((p, i) => ({ ...p, ref: base ? `${base}-${i + 1}` : "", src: img(p.file) }))
    .filter((p) => p.src !== "");
}

/** Photos attached directly to a page section, numbered e.g. IL.3-2. */
export function sectionGallery(page: Page, sectionIndex: number): RefPhoto[] {
  const section = page.sections[sectionIndex];
  if (!section?.photos) return [];
  const base = photoRef(page, sectionIndex, 0).replace(/-1$/, "");
  return withRefs(section.photos, base);
}

/** Photos for program sections and reset checklists. */
export function galleryFor(key: string, base = ""): RefPhoto[] {
  return withRefs(raw[key] ?? [], base);
}

export const heroPhoto = img("image58");

export type Block =
  | { kind: "para"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "steps"; items: string[] }
  | { kind: "note"; text: string }
  | { kind: "address"; lines: string[] }
  | { kind: "contact"; name: string; role: string; detail?: string };

/** A photo inside a section. `file` is the image name in src/assets/v4. */
export type SectionPhoto = {
  file: string;
  caption: string;
};

/** A photo once it has been given a reference like "IL.3-2". */
export type RefPhoto = SectionPhoto & {
  ref: string;
  src: string;
};

export type Section = {
  id: string;
  title: string;
  summary?: string;
  blocks: Block[];
  photos?: SectionPhoto[];
  source: string;
  awaiting?: boolean;
};

export type Page = {
  slug: string;
  /** Short reference code used in section numbers, e.g. "IL". */
  code?: string;
  title: string;
  kicker?: string;
  intro: string;
  status?: "live" | "draft" | "awaiting-content";
  sections: Section[];
};

export type ChecklistGroup = {
  title: string;
  items: string[];
};

export type ResetGuide = {
  slug: string;
  code?: string;
  title: string;
  goal: string;
  groups: ChecklistGroup[];
  source: string;
};

/** "IL.3" for the third section of the Innovation Lab page. */
export function sectionRef(page: Page, index: number): string {
  return page.code ? `${page.code}.${index + 1}` : "";
}

/** "IL.3-2" for the second photo of that section. */
export function photoRef(page: Page, sectionIndex: number, photoIndex: number): string {
  const base = sectionRef(page, sectionIndex);
  return base ? `${base}-${photoIndex + 1}` : "";
}

export function blockText(block: Block): string {
  switch (block.kind) {
    case "para":
    case "note":
      return block.text;
    case "list":
    case "steps":
      return block.items.join(" ");
    case "address":
      return block.lines.join(" ");
    case "contact":
      return `${block.name} ${block.role} ${block.detail ?? ""}`;
  }
}

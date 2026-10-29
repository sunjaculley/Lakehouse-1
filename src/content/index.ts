import { spacePages } from "./spaces";
import { programPages } from "./program";
import { resetGuides, resetBySlug } from "./resets";
import { contacts } from "./contacts";
import { blockText, sectionRef, type Block, type Page } from "./types";

export * from "./types";
export { spacePages, programPages, resetGuides, resetBySlug, contacts };

// Short reference codes so people can point at a page in a request.
const PROGRAM_CODES: Record<string, string> = {
  registration: "REG",
  transportation: "TRA",
  badges: "BDG",
  agenda: "AGD",
  "food-and-beverage": "FNB",
  "add-ons": "ADD",
  filming: "FLM",
  "printing-and-shipping": "PRT",
  "app-and-wifi": "APP",
  "stores-and-gifts": "STR",
  "meeting-space": "MTG",
  "materials-and-supplies": "SUP",
  "room-setups": "SET",
};

for (const page of programPages) {
  page.code ??= PROGRAM_CODES[page.slug] ?? page.slug.slice(0, 3).toUpperCase();
}

const RESET_CODES: Record<string, string> = {
  "innovation-lab": "R-IL",
  "living-labs": "R-LL",
  "story-lab": "R-SL",
};

for (const guide of resetGuides) {
  guide.code ??= RESET_CODES[guide.slug] ?? "R";
}

export const spaceBySlug = (slug: string) => spacePages.find((p) => p.slug === slug);
export const programBySlug = (slug: string) => programPages.find((p) => p.slug === slug);

export type SearchEntry = {
  title: string;
  context: string;
  href: string;
  blocks: Block[];
  source: string;
  haystack: string;
  keywords: string[];
};

const SYNONYMS: Record<string, string[]> = {
  registration: ["register", "cvent", "invite", "invitation", "sign up"],
  badge: ["badges", "lanyard", "lanyards", "name tag", "ribbon"],
  food: ["catering", "meal", "meals", "dining", "drinks", "beverage", "lunch", "dinner", "breakfast", "coffee"],
  transport: ["transportation", "shuttle", "airport", "mco", "flight", "parking", "valet"],
  tech: ["technology", "av", "screen", "alleo", "teams", "hdmi", "cyviz", "video wall", "projector"],
  reset: ["tidy", "clean", "pack up", "leave the room", "checklist"],
  supplies: ["materials", "post-it", "stickies", "markers", "sharpies", "stationery"],
  wifi: ["internet", "network", "wi-fi"],
  print: ["printing", "shipping", "ship", "courier"],
  gift: ["gifts", "store", "swag", "merchandise", "gear"],
};

function expand(word: string): string[] {
  const out = [word];
  for (const [key, values] of Object.entries(SYNONYMS)) {
    if (word === key || values.includes(word)) out.push(key, ...values);
  }
  return out;
}

function pageEntries(page: Page, base: string, context: string): SearchEntry[] {
  return page.sections.map((section, i) => {
    const ref = sectionRef(page, i);
    return {
      title: `${page.title} — ${section.title}`,
      context,
      href: `${base}/${page.slug}#${section.id}`,
      blocks: section.blocks,
      source: section.source,
      haystack: [page.title, page.intro, section.title, section.summary ?? "", ...section.blocks.map(blockText)]
        .join(" ")
        .toLowerCase(),
      keywords: [page.slug, section.id, ref.toLowerCase()],
    };
  });
}

export const searchEntries: SearchEntry[] = [
  ...spacePages.flatMap((p) => pageEntries(p, "/spaces", "The spaces")),
  ...programPages.flatMap((p) => pageEntries(p, "/program", "Running a program")),
  ...resetGuides.map((guide) => ({
    title: guide.title,
    context: "Reset guides",
    href: `/reset/${guide.slug}`,
    blocks: [
      { kind: "para", text: guide.goal } as Block,
      ...guide.groups.map((g) => ({ kind: "list", items: [g.title, ...g.items] }) as Block),
    ],
    source: guide.source,
    haystack: [guide.title, guide.goal, ...guide.groups.flatMap((g) => [g.title, ...g.items])]
      .join(" ")
      .toLowerCase(),
    keywords: ["reset", guide.slug],
  })),
  {
    title: "Who to call",
    context: "Contacts",
    href: "/contacts",
    blocks: contacts.map(
      (c) => ({ kind: "contact", name: c.name, role: c.role, detail: c.detail }) as Block,
    ),
    source: "All four decks",
    haystack: contacts
      .map((c) => [c.name, c.role, c.detail ?? "", ...c.topics].join(" "))
      .join(" ")
      .toLowerCase(),
    keywords: ["contact", "who to call", "support", "help"],
  },
];

const STOPWORDS = new Set([
  "the", "a", "an", "is", "are", "do", "does", "how", "what", "who", "where", "when", "i", "we",
  "to", "for", "of", "in", "on", "at", "and", "or", "my", "can", "should", "it", "with", "about",
]);

export function search(query: string, limit = 6): SearchEntry[] {
  const words = query
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));

  if (words.length === 0) return [];

  const terms = [...new Set(words.flatMap(expand))];

  const scored = searchEntries.map((entry) => {
    let score = 0;
    for (const term of terms) {
      if (entry.haystack.includes(term)) score += term.length > 4 ? 3 : 2;
      if (entry.title.toLowerCase().includes(term)) score += 6;
      if (entry.keywords.some((k) => k.includes(term))) score += 4;
    }
    if (entry.haystack.includes(query.toLowerCase())) score += 8;
    return { entry, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.entry);
}

export const quickLinks = [
  { label: "Registration", href: "/program/registration" },
  { label: "Tech in the spaces", href: "/spaces/innovation-lab#technology" },
  { label: "Reset guides", href: "/reset/innovation-lab" },
  { label: "Badges & lanyards", href: "/program/badges" },
  { label: "Food & beverage", href: "/program/food-and-beverage" },
  { label: "Transportation", href: "/program/transportation" },
  { label: "Innovation Lab", href: "/spaces/innovation-lab" },
  { label: "Living Labs", href: "/spaces/living-labs" },
  { label: "Story Lab", href: "/spaces/story-lab" },
  { label: "Immersive Room", href: "/spaces/immersive-room" },
  { label: "Room set-ups", href: "/program/room-setups" },
  { label: "Who to call", href: "/contacts" },
];

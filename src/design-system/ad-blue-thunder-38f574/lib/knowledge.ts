import knowledgeMd from "@kpmg-us/ad-design-lib2/dist/knowledge.md?raw";

/**
 * Splits the upstream knowledge.md into `### <Name>` sections and returns the
 * raw markdown body (without the heading) for a given component name.
 */
const sectionCache = new Map<string, string>();

function buildCache() {
  if (sectionCache.size > 0) return;
  const lines = knowledgeMd.split("\n");
  let current: { name: string; body: string[] } | null = null;

  for (const line of lines) {
    // A new `## ` heading ends the current `### ` section.
    if (/^##\s+/.test(line) && !/^###/.test(line)) {
      if (current) sectionCache.set(current.name, current.body.join("\n").trim());
      current = null;
      continue;
    }
    const m = line.match(/^###\s+(.+?)\s*$/);
    if (m) {
      if (current) sectionCache.set(current.name, current.body.join("\n").trim());
      current = { name: m[1].trim(), body: [] };
    } else if (current) {
      current.body.push(line);
    }
  }
  if (current) sectionCache.set(current.name, current.body.join("\n").trim());
}

export function getKnowledgeSection(name: string): string | null {
  buildCache();
  // Try exact, then case-insensitive.
  if (sectionCache.has(name)) return sectionCache.get(name)!;
  const lower = name.toLowerCase();
  for (const [key, value] of sectionCache) {
    if (key.toLowerCase() === lower) return value;
  }
  return null;
}

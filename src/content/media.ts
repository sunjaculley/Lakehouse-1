// Photos extracted from the V4 resource guide deck.
// Keys are the original image file names inside the deck, e.g. "image60".
const modules = import.meta.glob("../assets/v4/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export const v4Photos: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [
    (path.split("/").pop() ?? "").replace(/\.jpg$/, ""),
    url,
  ]),
);

export function img(name: string): string {
  return v4Photos[name] ?? "";
}

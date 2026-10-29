export type CampusLevel = "all" | "1" | "2";
export const campusPins = [
  { id: "the-exchange", level: 1, x: 331, y: 343 },
  { id: "stretch", level: 1, x: 455, y: 390 },
  { id: "lakeside-park", level: 1, x: 470, y: 327 },
  { id: "the-landing", level: 1, x: 588, y: 279 },
  { id: "common-ground", level: 2, x: 541, y: 153 },
  { id: "blend", level: 2, x: 628, y: 199 },
] as const;
export type CampusPin = typeof campusPins[number];
export const campusFullView = { x: 0, y: 0, w: 712, h: 559 };
export const campusLevelTwoView = { x: 340, y: 0, w: 372, h: 298 };
export function campusFocusView(pin: CampusPin) {
  const w = 250, h = w * campusFullView.h / campusFullView.w;
  return { x: Math.max(0, Math.min(campusFullView.w - w, pin.x - w / 2)), y: Math.max(0, Math.min(campusFullView.h - h, pin.y - h / 2)), w, h };
}
export function campusMatchesLevel(pin: CampusPin, level: CampusLevel) {
  return level === "all" || String(pin.level) === level;
}
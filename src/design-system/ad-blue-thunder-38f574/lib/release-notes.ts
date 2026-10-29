export type ReleaseNote = {
  version: string;
  date?: string;
  summary: string;
  added?: string[];
  changed?: string[];
  notes?: string[];
};

/**
 * Release notes for @kpmg-us/ad-design-lib2, newest first.
 * Add a new entry each time the package version is bumped.
 */
export const releaseNotes: ReleaseNote[] = [
  {
    version: "0.2.5",
    summary: "Chat empty-state decoration removed.",
    changed: [
      "The drifting blue, purple, and red glow shown in an empty chat was removed; the empty chat is now plain white.",
    ],
    notes: ["Component exports are unchanged from 0.2.4."],
  },
  {
    version: "0.2.4",
    summary: "Chat panel spacing and corner refinements.",
    changed: [
      "Chat panel, message bubbles, and composer box now share the same large corner radius.",
      "The line between the message area and the composer was removed.",
      "Composer spacing is even on all sides, and starter ideas sit closer to the composer.",
    ],
    notes: ["Component exports are unchanged from 0.2.3."],
  },
  {
    version: "0.2.3",
    summary: "Button spacing refinements and a redesigned chat composer.",
    changed: [
      "Button icon-to-label gap now scales with size (10px large, 8px medium/small, 4px xsmall).",
      "Secondary button colors documented: surface background with primary text.",
      "Chat uses a sparkle bot icon in the header and on bot messages.",
      "Chat composer is now one bordered box with the text area on top and Attach and Send buttons below.",
    ],
    notes: ["Component exports are unchanged from 0.2.1.", "0.2.2 was skipped here; its changes are included in 0.2.3."],
  },
  {
    version: "0.2.1",
    summary: "Button variant rename and a new outlined tertiary button.",
    changed: [
      "The borderless tertiary button is now variant=\"text\".",
      "variant=\"tertiary\" is now an outlined blue button.",
    ],
    notes: [
      "Review any existing tertiary buttons — they now render with an outline.",
      "Exports and library docs are otherwise unchanged from 0.2.0.",
    ],
  },
  {
    version: "0.2.0",
    summary: "Breadcrumbs options and top navigation scroll control.",
    added: [
      "Breadcrumbs support optional per-level icons (showIcon).",
      "Breadcrumbs support a per-level submenu chevron (showChevron).",
    ],
    changed: ["Top navigation can disable its shrink-on-scroll behavior."],
  },
  {
    version: "0.1.2",
    summary: "Chat component released.",
    added: ["Chat component with its own styles.", "Chat demo added to the showcase."],
  },
  {
    version: "0.1.1",
    summary: "Global notification and lighter input borders.",
    added: ["GlobalNotification component.", "Avatar gained an icon option."],
    changed: ["TextField and TextArea borders reduced from 2px to 1px."],
  },
  {
    version: "0.1.0",
    summary: "Side navigation components.",
    added: [
      "SideNavigation — inline navigation for a flex layout.",
      "SideNavigation2 — fixed-position overlay navigation.",
    ],
  },
  {
    version: "0.0.6",
    summary: "Component set cleanup.",
    changed: ["Several early components were removed or consolidated."],
  },
];

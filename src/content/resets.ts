import type { ResetGuide } from "./types";

const SRC = "Ignition Delivering at Lakehouse — Planning and Experience Resource Guide (updated September 2026)";

export const resetGuides: ResetGuide[] = [
  {
    slug: "innovation-lab",
    title: "Innovation Lab reset",
    goal: "Return the space to a clean, neutral, client-ready state.",
    groups: [
      {
        title: "Dancing walls and whiteboards",
        items: [
          "Return all 4 dancing walls to the recessed alcoves at the back",
          "Put each power cord back into its dancing wall",
          "Place the whiteboards back on their racks",
        ],
      },
      {
        title: "Furniture and materials",
        items: [
          "Remove session materials and rubbish",
          "Return Ignition materials to the closet",
          "Reset the furniture to the standard plenary layout",
        ],
      },
      {
        title: "Split flap board",
        items: [
          "Using the iPad, reset the board to its generic state (under 'Innovation Lab' collections in the app)",
          "If any flaps show incorrectly, contact Kieran",
        ],
      },
      {
        title: "Cabinet of curiosity",
        items: [
          "Clean off the credenza",
          "Arrange the books neatly",
          "Put several thought leadership pieces out and available (stored in the cabinet under the credenza)",
        ],
      },
      {
        title: "Technology",
        items: [
          "Using Cyviz, reset the screen wall to its original screensaver — or power the whole system down at end of day",
          "Confirm with Kieran that the tech is reset",
        ],
      },
    ],
    source: SRC,
  },
  {
    slug: "living-labs",
    title: "Living Labs reset",
    goal: "Ensure exhibits are functioning, clean, and set to default views.",
    groups: [
      {
        title: "AI exhibits and dancing walls",
        items: [
          "Return the dancing walls to their original locations",
          "Navigate each exhibit site back to its landing page",
          "Report issues to IT or designated support (Kieran Ramnarine or Carlos Diaz)",
        ],
      },
      {
        title: "Wall of Disruption",
        items: [
          "Replace any moved artifacts exactly as the reference image shows",
          "Lightly clean and dust all surfaces",
        ],
      },
      {
        title: "Digital totems and mural",
        items: [
          "Reset the microsite totem to its landing page",
          "Check the QR code on the Pulse Check totem still works, and report any issue",
          "Check the Maker's Notebook mural for damage or grubbiness and make sure it is easy to view",
          "Arrange the exhibit-area furniture and side tables so they look welcoming and organised",
        ],
      },
      {
        title: "Whiteboards and room upkeep",
        items: [
          "Clean whiteboards with rags and water spray bottles",
          "Re-rack the whiteboards on the wall",
          "Clean the floor (vacuum and mop)",
        ],
      },
      { title: "Technology", items: ["Confirm with Kieran that the tech is reset"] },
    ],
    source: SRC,
  },
  {
    slug: "story-lab",
    title: "Story Lab reset",
    goal: "Leave the booth ready for the next participant.",
    groups: [
      {
        title: "Recordings",
        items: [
          "Check every participant pressed Upload — recordings are not saved otherwise",
          "Return the screen to the home view",
        ],
      },
      {
        title: "Booth",
        items: [
          "Reset the two chairs and side table",
          "Remove cups, materials and rubbish",
        ],
      },
    ],
    source: "Lakehouse Space Quick Reference Guide",
  },
];

export const resetBySlug = (slug: string) => resetGuides.find((g) => g.slug === slug);

export type Contact = {
  /** What they cover — short topic label. */
  name: string;
  /** Person or team. */
  role: string;
  /** Ultra-short description (a few words). */
  detail?: string;
  email?: string;
  phone?: string;
  topics: string[];
};

// Directory format: topic, who, a few words, email, phone.
export const contacts: Contact[] = [
  {
    name: "General",
    role: "Luis Rosenthal",
    detail: "Market Leader — first stop",
    email: "luisrosenthal@kpmg.com",
    topics: ["general", "queries", "market leader"],
  },
  {
    name: "Technology",
    role: "Kieran Ramnarine",
    detail: "Ignition Champion — tech SME, all spaces",
    email: "kramnarine@kpmg.com",
    topics: ["technology", "alleo", "dancing walls", "screen wall"],
  },
  {
    name: "Technology backup",
    role: "Carlos Diaz",
    detail: "Lakehouse IT",
    email: "cdiaz5@kpmg.com",
    topics: ["technology", "backup"],
  },
  {
    name: "Technology leader",
    role: "Kevin Edmondson",
    detail: "Escalation; arcade cabinet",
    email: "kedmondson1@kpmg.com",
    topics: ["technology", "arcade"],
  },
  {
    name: "A/V",
    role: "Manager on Duty",
    detail: "Mics, cameras, audio, recording",
    phone: "+1 224 297 4148",
    topics: ["av", "audio", "cameras", "recording"],
  },
  {
    name: "Split Flap",
    role: "Damon Talley",
    detail: "Board messages and faults",
    topics: ["split flap", "signage"],
  },
  {
    name: "Living Labs",
    role: "Krystin Stafford",
    detail: "First contact for the Living Lab",
    topics: ["living lab", "exhibits"],
  },
  {
    name: "Exhibit logins & totems",
    role: "Maya Lawrence / Chris Brodkey",
    detail: "RVA, aIQ Hive, totem content",
    topics: ["exhibits", "logins", "totem"],
  },
  {
    name: "Display content",
    role: "David Blickle",
    detail: "Always-on display screens",
    topics: ["display screen", "content"],
  },
  {
    name: "Story Lab",
    role: "Michael Lewis",
    detail: "Videos, Poppulo totem, signage",
    email: "michaeljlewis@kpmg.com",
    topics: ["story lab", "video", "signage"],
  },
  {
    name: "Supplies",
    role: "Toni Latimore / LaTanya Dunson",
    detail: "Restocking, supply closet PE203",
    topics: ["supplies", "materials"],
  },
  {
    name: "Concierge",
    role: "Lakehouse Event Concierge",
    detail: "Furniture, lights, shades, outages",
    phone: "+1 407 664 5939",
    topics: ["concierge", "furniture", "lights"],
  },
  {
    name: "Security",
    role: "Lakehouse Security",
    detail: "Site security, after-hours access",
    phone: "+1 407 329 2385",
    topics: ["security", "access"],
  },
  {
    name: "Program logistics",
    role: "Lakehouse PD Planner",
    detail: "Rooms, sets, F&B, agenda, transport",
    topics: ["planning", "logistics", "agenda", "food"],
  },
  {
    name: "IT incidents (low priority)",
    role: "Incident form",
    detail: "wkf.ms/497BuUT — urgent: Teams Kieran",
    topics: ["incident", "ticket", "support"],
  },
];

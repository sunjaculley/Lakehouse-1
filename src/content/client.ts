/* Client-only concept content. Draft and placeholder entries are not approved operational guidance. */
export const clientContent = {
  "navigation": [
    {
      "id": "welcome",
      "label": "Welcome",
      "target": "#welcome"
    },
    {
      "id": "prepare",
      "label": "Prepare",
      "target": "#prepare",
      "includes": [
        "#arrival"
      ]
    },
    {
      "id": "explore",
      "label": "Explore",
      "target": "#explore"
    },
    {
      "id": "questions",
      "label": "Questions",
      "target": "#questions",
      "includes": [
        "#find"
      ]
    },
    {
      "id": "help",
      "label": "Help",
      "target": "#help"
    }
  ],
  "welcome": {
    "status": "draft",
    "text": "Use this page to prepare for arrival, get to know the campus, set up the Lakehouse app and find quick answers throughout your stay."
  },
  "categories": [
    {
      "id": "eat",
      "label": "Eat & drink",
      "icon": "E"
    },
    {
      "id": "wellness",
      "label": "Wellness",
      "icon": "W"
    },
    {
      "id": "activity",
      "label": "Activities",
      "icon": "A"
    },
    {
      "id": "focus",
      "label": "Work & recharge",
      "icon": "R"
    }
  ],
  "preparationTopics": [
    {
      "id": "arrival",
      "num": "01",
      "title": "Arrival details",
      "status": "placeholder",
      "summary": "Access, airport and rail arrivals, driving and check-in.",
      "details": "Approved guidance on access, arrival by MCO, Brightline or car, and check-in will appear here.",
      "tags": [
        "Access & check-in",
        "MCO",
        "Brightline",
        "Driving"
      ],
      "faqs": [
        "q-arrive-need"
      ]
    },
    {
      "id": "stay",
      "num": "02",
      "title": "Accommodations & stay",
      "status": "placeholder",
      "summary": "Lodging basics and help with your stay.",
      "details": "Approved evergreen accommodation information and reservation help will appear here.",
      "tags": [
        "Guest rooms",
        "Amenities",
        "Reservation help"
      ],
      "faqs": []
    },
    {
      "id": "app",
      "num": "03",
      "title": "Lakehouse app",
      "status": "placeholder",
      "summary": "Download the app and sign in as an external guest.",
      "details": "Approved download links and external (non-KPMG) sign-in instructions will appear here.",
      "tags": [
        "iOS download",
        "Android download",
        "External sign-in",
        "Quick-reference guide"
      ],
      "faqs": [
        "q-app"
      ],
      "resources": [
        "r-app-ios",
        "r-app-android"
      ]
    },
    {
      "id": "bring",
      "num": "04",
      "title": "What to bring & know",
      "status": "draft",
      "summary": "Packing, attire and how Lakehouse works.",
      "details": "Plan for both business-casual and active clothing. Lakehouse operates as a cashless environment. Approved detail on visitor policies, including alcohol guidance, will appear here.",
      "tags": [
        "Business casual",
        "Activewear",
        "Cashless",
        "Visitor policies"
      ],
      "faqs": [
        "q-pack",
        "q-cashless",
        "q-bring"
      ]
    }
  ],
  "arrivalSteps": [
    {
      "num": "01",
      "title": "Access & arrival",
      "text": "Security access, identification, check-in and front-entry guidance.",
      "status": "placeholder"
    },
    {
      "num": "02",
      "title": "Air & rail",
      "text": "Orlando International Airport (MCO), Brightline and arranged transportation.",
      "status": "placeholder"
    },
    {
      "num": "03",
      "title": "Driving",
      "text": "Main-gate entry, navigation, arrival sequence and parking.",
      "status": "placeholder"
    }
  ],
  "destinations": [
    {
      "id": "common-ground",
      "name": "Common Ground",
      "categories": [
        "eat"
      ],
      "status": "draft",
      "map": {
        "x": 28,
        "y": 30
      },
      "short": "Coffee caf\u00e9 and an easy daytime stop.",
      "tags": [
        "Coffee",
        "Caf\u00e9",
        "Daytime"
      ],
      "faqs": [
        "q-eat"
      ],
      "resources": [
        "r-menus"
      ],
      "menu": true,
      "related": [
        "the-exchange",
        "blend"
      ],
      "images": 3
    },
    {
      "id": "the-exchange",
      "name": "The Exchange",
      "categories": [
        "eat"
      ],
      "status": "draft",
      "map": {
        "x": 46,
        "y": 44
      },
      "short": "Food hall and the main dining destination.",
      "tags": [
        "Food hall",
        "Dining"
      ],
      "faqs": [
        "q-eat"
      ],
      "resources": [
        "r-menus"
      ],
      "menu": true,
      "related": [
        "common-ground",
        "the-landing"
      ],
      "images": 3
    },
    {
      "id": "the-landing",
      "name": "The Landing",
      "categories": [
        "eat",
        "activity"
      ],
      "status": "draft",
      "map": {
        "x": 64,
        "y": 34
      },
      "short": "Sports pub and a social place to gather.",
      "tags": [
        "Sports pub",
        "Social"
      ],
      "faqs": [
        "q-eat",
        "q-activities"
      ],
      "resources": [
        "r-menus"
      ],
      "menu": true,
      "related": [
        "blend",
        "lakeside-park"
      ],
      "images": 2
    },
    {
      "id": "blend",
      "name": "Blend",
      "categories": [
        "eat"
      ],
      "status": "draft",
      "map": {
        "x": 38,
        "y": 66
      },
      "short": "Wine bar and an evening social setting.",
      "tags": [
        "Wine bar",
        "Evening"
      ],
      "faqs": [
        "q-eat"
      ],
      "resources": [
        "r-menus"
      ],
      "menu": true,
      "related": [
        "the-landing",
        "common-ground"
      ],
      "images": 2
    },
    {
      "id": "stretch",
      "name": "Stretch",
      "categories": [
        "wellness"
      ],
      "status": "draft",
      "map": {
        "x": 18,
        "y": 58
      },
      "short": "On-site fitness center and workout options.",
      "tags": [
        "Fitness",
        "Workout"
      ],
      "faqs": [
        "q-exercise"
      ],
      "resources": [
        "r-hours"
      ],
      "related": [
        "lakeside-park"
      ],
      "images": 2
    },
    {
      "id": "lakeside-park",
      "name": "Lakeside Park",
      "categories": [
        "activity",
        "wellness"
      ],
      "status": "draft",
      "map": {
        "x": 78,
        "y": 66
      },
      "short": "Outdoor lounge, sports and recreation by the lake.",
      "tags": [
        "Outdoors",
        "Sports",
        "Recreation"
      ],
      "faqs": [
        "q-activities",
        "q-exercise"
      ],
      "resources": [],
      "related": [
        "stretch",
        "the-landing"
      ],
      "images": 3
    }
  ],
  "faqs": [
    {
      "id": "q-arrive-need",
      "group": "arrival",
      "question": "What do I need when I arrive?",
      "answer": "Approved guidance on QR code access, identification and check-in will appear here.",
      "status": "placeholder"
    },
    {
      "id": "q-travel",
      "group": "arrival",
      "question": "How do I get here from MCO or Brightline?",
      "answer": "Approved transportation guidance and links will appear here.",
      "status": "placeholder"
    },
    {
      "id": "q-pack",
      "group": "arrival",
      "question": "What should I pack?",
      "answer": "Pack business-casual clothing as well as activewear. Further approved packing guidance will appear here.",
      "status": "draft"
    },
    {
      "id": "q-bring",
      "group": "prepare",
      "question": "What can or can\u2019t I bring?",
      "answer": "Approved visitor policies, including alcohol guidance, will appear here.",
      "status": "placeholder"
    },
    {
      "id": "q-cashless",
      "group": "prepare",
      "question": "Is Lakehouse cashless?",
      "answer": "Yes \u2014 Lakehouse is a cashless environment. Approved payment details will appear here.",
      "status": "draft"
    },
    {
      "id": "q-app",
      "group": "prepare",
      "question": "How do I sign in to the app as a guest?",
      "answer": "Approved external (non-KPMG) sign-in steps will appear here.",
      "status": "placeholder"
    },
    {
      "id": "q-eat",
      "group": "explore",
      "question": "Where can I eat or get coffee?",
      "answer": "Choose Eat & drink to see Common Ground, The Exchange, The Landing and Blend. Current menus link to a separately maintained source.",
      "status": "draft"
    },
    {
      "id": "q-exercise",
      "group": "explore",
      "question": "Where can I exercise or spend downtime?",
      "answer": "Choose Wellness or Activities to see Stretch and Lakeside Park.",
      "status": "draft"
    },
    {
      "id": "q-activities",
      "group": "explore",
      "question": "What activities are available?",
      "answer": "Choose Activities to see options such as Lakeside Park and The Landing. An approved activity list will appear here.",
      "status": "draft"
    },
    {
      "id": "q-quiet",
      "group": "explore",
      "question": "Where can I work or find a quiet space?",
      "answer": "Approved focus and work-space locations will appear here.",
      "status": "placeholder"
    },
    {
      "id": "q-business",
      "group": "explore",
      "question": "Is there a business center?",
      "answer": "Approved business-center information will appear here.",
      "status": "placeholder"
    },
    {
      "id": "q-dry",
      "group": "residual",
      "question": "Is dry cleaning available?",
      "answer": "Approved service availability and request information will appear here.",
      "status": "placeholder"
    },
    {
      "id": "q-lost",
      "group": "residual",
      "question": "How do I contact lost and found?",
      "answer": "Approved lost-and-found information will appear here.",
      "status": "placeholder"
    },
    {
      "id": "q-access",
      "group": "residual",
      "question": "How do I request accessibility support?",
      "answer": "The approved client-facing accessibility resource will appear here.",
      "status": "placeholder"
    }
  ],
  "resources": [
    {
      "id": "r-menus",
      "label": "Current menus",
      "type": "menu",
      "url": null,
      "status": "placeholder"
    },
    {
      "id": "r-hours",
      "label": "Operating hours",
      "type": "other",
      "url": null,
      "status": "placeholder"
    },
    {
      "id": "r-app-ios",
      "label": "Lakehouse app for iOS",
      "type": "other",
      "url": null,
      "status": "placeholder"
    },
    {
      "id": "r-app-android",
      "label": "Lakehouse app for Android",
      "type": "other",
      "url": null,
      "status": "placeholder"
    },
    {
      "id": "r-support",
      "label": "Lakehouse support",
      "type": "support",
      "url": null,
      "status": "placeholder"
    },
    {
      "id": "r-access",
      "label": "Accessibility resource",
      "type": "accessibility",
      "url": null,
      "status": "placeholder"
    },
    {
      "id": "r-legal",
      "label": "Legal",
      "type": "policy",
      "url": null,
      "status": "placeholder"
    },
    {
      "id": "r-a11y",
      "label": "Accessibility statement",
      "type": "policy",
      "url": null,
      "status": "placeholder"
    },
    {
      "id": "r-privacy",
      "label": "Privacy",
      "type": "policy",
      "url": null,
      "status": "placeholder"
    },
    {
      "id": "r-cookies",
      "label": "Cookie preferences",
      "type": "policy",
      "url": null,
      "status": "placeholder"
    }
  ],
  "help": [
    {
      "id": "h-support",
      "title": "Lakehouse support",
      "text": "Client-facing contact and help details.",
      "resource": "r-support",
      "status": "placeholder"
    },
    {
      "id": "h-menus",
      "title": "Menus & hours",
      "text": "Always current, maintained outside this page.",
      "resource": "r-menus",
      "status": "placeholder"
    },
    {
      "id": "h-access",
      "title": "Accessibility",
      "text": "Request accommodations and support.",
      "resource": "r-access",
      "status": "placeholder"
    }
  ],
  "footerLinks": [
    "r-legal",
    "r-a11y",
    "r-privacy",
    "r-cookies"
  ],
  "searchTerms": {
    "pack": [
      "pack",
      "packing",
      "bring",
      "clothes",
      "clothing",
      "wear",
      "attire",
      "dress",
      "activewear",
      "luggage"
    ],
    "eat": [
      "eat",
      "food",
      "dining",
      "dinner",
      "lunch",
      "breakfast",
      "coffee",
      "drink",
      "menu",
      "bar",
      "wine",
      "restaurant",
      "hungry"
    ],
    "travel": [
      "get",
      "getting",
      "travel",
      "airport",
      "mco",
      "brightline",
      "train",
      "drive",
      "driving",
      "car",
      "arrive",
      "arrival",
      "directions",
      "parking",
      "transport"
    ],
    "exercise": [
      "exercise",
      "gym",
      "fitness",
      "workout",
      "run",
      "wellness",
      "sport",
      "sports",
      "active"
    ],
    "quiet": [
      "quiet",
      "work",
      "focus",
      "recharge",
      "business",
      "laptop",
      "call",
      "meeting"
    ],
    "app": [
      "app",
      "download",
      "login",
      "sign",
      "phone"
    ],
    "pay": [
      "cash",
      "cashless",
      "pay",
      "payment",
      "card",
      "money"
    ],
    "help": [
      "help",
      "support",
      "contact",
      "lost",
      "found",
      "accessibility",
      "accessible",
      "dry",
      "cleaning"
    ]
  },
  "suggestedQueries": [
    "What should I pack?",
    "Where can I eat?",
    "How do I get to Lakehouse?",
    "Where can I exercise?",
    "Where can I find a quiet space?"
  ]
} as const;

export function clientMatches(query: string) {
  const words = query.toLowerCase().split(/\W+/).filter(word => word.length > 2 && !["what", "where", "how", "the", "can", "for", "and"].includes(word));
  if (!words.length) return [];
  return clientContent.faqs.filter(item => words.some(word => `${item.question} ${item.answer}`.toLowerCase().includes(word)));
}

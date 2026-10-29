import type { Page } from "./types";

const SRC = "Ignition Delivering at Lakehouse — Planning and Experience Resource Guide (updated September 2026)";

const planner = {
  kind: "note" as const,
  text: "Your Lakehouse Program Delivery (PD) Planner is the primary point of contact for all program logistics, space availability and needs while at Lakehouse.",
};

export const programPages: Page[] = [
  {
    slug: "registration",
    title: "Registration and communications",
    intro: "Everyone attending must be registered in Cvent to get onto campus.",
    status: "live",
    sections: [
      {
        id: "registration",
        title: "Registration",
        blocks: [
          planner,
          {
            kind: "list",
            items: [
              "Registration runs in Cvent, centrally managed by the PD Planner and the Meeting Services Associate (MSA).",
              "The program stakeholder provides names, email addresses and company names (for clients) so invitations can go out via Cvent.",
              "Every KPMG and client participant must be registered in Cvent to access Lakehouse — this protects campus safety and continuity of operations.",
              "Registration sites cannot launch without budget approval, and must go through the firm-approved E&M / F&A approval hierarchy. Engaging Ignition is not included in the Lakehouse budget.",
              "A high-level agenda (start and end times) is required to launch registration.",
              "Sites are templated with Lakehouse branding, required attestations, registration information and guest room accommodation details.",
            ],
          },
        ],
        source: SRC,
      },
      {
        id: "communications",
        title: "Communications",
        blocks: [
          {
            kind: "para",
            text: "The invitation, registration confirmation, external participant travel survey and the Know Before You Go (Accommodations Confirmation) are all sent via Cvent by the MSA.",
          },
        ],
        source: SRC,
      },
    ],
  },
  {
    slug: "transportation",
    title: "Transportation",
    intro: "Airport shuttles, client flights and parking.",
    status: "live",
    sections: [
      {
        id: "ground",
        title: "Ground transportation",
        blocks: [
          {
            kind: "list",
            items: [
              "Lakehouse runs transport to and from Orlando International (MCO) on check-in and check-out days, whatever the flight time. Transport staff track inbound flights and monitor delays.",
              "Board the shuttle no less than two hours before departure. Schedules are displayed around Lakehouse.",
              "Valet parking is available if you drive.",
            ],
          },
        ],
        source: SRC,
      },
      {
        id: "clients",
        title: "Client flights",
        blocks: [
          {
            kind: "para",
            text: "Client flight details come through the Lakehouse Travel Survey, sent by the Guest Experience team about two weeks before the program. Lakehouse provides round-trip transport from MCO; logistics are agreed with your Lead Planner in advance.",
          },
        ],
        source: SRC,
      },
    ],
  },
  {
    slug: "badges",
    title: "Name badges and lanyards",
    intro: "Standard badges, lanyard colours by audience, and ribbons.",
    status: "live",
    sections: [
      {
        id: "badges",
        title: "Name badge layout",
        blocks: [
          { kind: "para", text: "Lakehouse has a standard badge for all attendees. Name badges cannot be customised." },
          {
            kind: "list",
            items: [
              "Front: preferred first name (bold, larger), last name, pronouns (optional at registration), function — company for clients — and an optional LinkedIn QR code.",
              "Back: Lakehouse security information.",
            ],
          },
        ],
        source: SRC,
      },
      {
        id: "lanyards",
        title: "Lanyard colours",
        blocks: [
          {
            kind: "list",
            items: [
              "Pacific blue — clients and government registrants",
              "Blue — KPMG participants (US, international and other)",
              "White — facilitators, speakers and program staff (must register as this type)",
              "Purple — interns and new hires",
              "Teal — external registrants",
              "Pink — Leader in Residence",
            ],
          },
          { kind: "note", text: "No other lanyards may be used at Lakehouse without approval from Lakehouse leadership." },
        ],
        source: SRC,
      },
      {
        id: "ribbons",
        title: "Ribbons",
        blocks: [
          {
            kind: "list",
            items: [
              "The Culture Champion ribbon is provided and attached by the Lakehouse Lobby Experience team.",
              "Any other ribbons or stickers are not managed by Lakehouse and must be added after badges are handed out.",
            ],
          },
        ],
        source: SRC,
      },
    ],
  },
  {
    slug: "agenda",
    title: "Agenda, showcase and stretch breaks",
    intro: "What the planner needs, and the extras that shape the day.",
    status: "live",
    sections: [
      {
        id: "operational",
        title: "Operational agenda",
        blocks: [
          {
            kind: "para",
            text: "The PD Planner needs a comprehensive agenda three business days before arrival, including set-up times, the client-facing agenda with breaks, activities and meals, and tear-down times. It drives the app agenda, technology testing, room sets and resourcing. Content will still change — the detail is needed in advance regardless.",
          },
        ],
        source: SRC,
      },
      {
        id: "showcase",
        title: "Lakehouse showcase",
        blocks: [
          {
            kind: "para",
            text: "The Client Relations team develops and leads a customised Lakehouse showcase (tour) for all client events, covering how Lakehouse came to be, sustainability efforts, KPMG history and the Lake Nona area. Coordinated with Visitor Management and your PD Planner.",
          },
        ],
        source: SRC,
      },
      {
        id: "stretch",
        title: "Wellness stretch breaks",
        blocks: [
          {
            kind: "para",
            text: "A five-minute energiser and team-building exercise is offered once a day by the fitness (Stretch) team. It is deliberately unscheduled — the team enters based on which side of the door hanger is showing. Your PD Planner can flag a preferred window.",
          },
          { kind: "note", text: "Only available between 10:00–11:30am and 2:00–4:30pm." },
        ],
        source: SRC,
      },
    ],
  },
  {
    slug: "food-and-beverage",
    title: "Food and beverage",
    intro: "Outlets, meals and private dining options.",
    status: "live",
    sections: [
      {
        id: "outlets",
        title: "Outlets",
        blocks: [
          {
            kind: "list",
            items: [
              "The Exchange — the signature dining hall, open for breakfast, lunch and dinner, with sushi, Italian, sandwiches and more. No reservations and seating cannot be pre-reserved; menus are in the Lakehouse app.",
              "Common Ground — the coffee shop, serving made-to-order Starbucks drinks plus grab-and-go snacks, pastries and sandwiches. Order ahead in the app to skip the line.",
              "Blend — an evening social venue with live music and a large lit patio, 22 sommelier-selected wines on tap plus cocktails and beers to purchase, and complimentary soft drinks and light refreshments.",
              "The Landing — the standalone evening social venue with a full bar to purchase and complimentary street tacos, sliders and nachos, plus games, entertainment and fire pits.",
              "Nourishment stations — drinks, snacks and water refill points throughout Lakehouse for your breaks.",
            ],
          },
        ],
        source: SRC,
      },
      {
        id: "meals",
        title: "Meals",
        blocks: [
          {
            kind: "para",
            text: "All meals, nourishment stations, coffee and snacks are included in both the day guest and overnight guest rates. Dietary requirements captured at registration are supported on site. For a private meal, your Lead Planner can provide availability, menus and costs.",
          },
        ],
        source: SRC,
      },
      {
        id: "private-dining",
        title: "Private and semi-private dining",
        blocks: [
          {
            kind: "list",
            items: [
              "Trattoria — semi-private space on the west side of The Exchange, capacity 45. Food comes from The Exchange; personalised options cost extra.",
              "Blend reception — private receptions 5:00–6:00pm nightly using the existing indoor and patio setup, capacity 75, at additional cost.",
              "Crescent Garden — private receptions and dinners, but a section of Illumination Hall must be held as a weather back-up and both must be available to confirm. After sunset needs generator or string light rental. Additional cost for the event, décor and lighting.",
            ],
          },
        ],
        source: SRC,
      },
    ],
  },
  {
    slug: "add-ons",
    title: "Add-on experiences",
    intro: "House activities and paid extras.",
    status: "live",
    sections: [
      {
        id: "sponsored",
        title: "Lakehouse sponsored activities",
        blocks: [
          {
            kind: "para",
            text: "Lakehouse activity programming is designed to foster cross-teaming and collaboration outside classroom sessions — fitness, recreation, entertainment and networking, updated weekly in the House Activity Schedule and open to all guests. Lakeside Park venues are open to everyone; they cannot be reserved or closed for private use.",
          },
        ],
        source: SRC,
      },
      {
        id: "paid",
        title: "Add-ons at additional cost",
        blocks: [
          {
            kind: "para",
            text: "If your program needs add-on experiences, the PD Planner identifies and presents options that fit your objectives, timing and budget — team building, curated Community Impact activities, or offsite experiences in Lake Nona. Private event space is usually required. Options come with detailed pricing; after selection the PD Planner handles contracting and logistics, and the engagement team or Ignition supports on-site execution.",
          },
        ],
        source: SRC,
      },
    ],
  },
  {
    slug: "filming",
    title: "Video recording and filming",
    intro: "Production requests, recording policy and outside vendors.",
    status: "live",
    sections: [
      {
        id: "requests",
        title: "Requesting production support",
        blocks: [
          {
            kind: "list",
            items: [
              "Submit filming, podcast and social media requests via the KPMG US Corporate Communications Intake and Calendar Submission Form. Corporate Communications reviews and sets up a scoping call.",
              "Lakehouse has no dedicated video, production or editing team — expect to absorb all filming costs.",
              "Outside vendors must provide a certificate of insurance and indemnification, plus a list of employees attending for the security list, no later than three days before the event.",
            ],
          },
        ],
        source: SRC,
      },
      {
        id: "policy",
        title: "Recording policy",
        blocks: [
          {
            kind: "para",
            text: "Recording meetings, calls and other communications with clients and third parties is limited to cases with a compelling business need approved by the appropriate stakeholders and the required participant consent. Recording must use KPMG IT resources or KPMG-approved technology and is subject to record retention requirements and applicable law.",
          },
          {
            kind: "list",
            items: [
              "The meeting organiser must be enabled for recording or nobody in the meeting can record. Request permission in advance via the Teams channel in the KPMG US Portal.",
              "The organiser must announce the recording and give participants the chance to drop off.",
            ],
          },
        ],
        source: SRC,
      },
    ],
  },
  {
    slug: "printing-and-shipping",
    title: "Printing and shipping",
    intro: "What you can print on site, and how to send materials ahead.",
    status: "live",
    sections: [
      {
        id: "printing",
        title: "Printing",
        blocks: [
          {
            kind: "list",
            items: [
              "Standard printing is available with Secureprint across from the Digital Desk in Pier West 101. There are no printers for non-KPMG professionals.",
              "Non-standard design or printing goes through Creative Services and AOE — Lakehouse has no on-site print shop. Lead time is roughly two weeks, so validate the need early.",
            ],
          },
        ],
        source: SRC,
      },
      {
        id: "shipping",
        title: "Shipping and receiving",
        blocks: [
          {
            kind: "para",
            text: "Ship via UPS, FedEx or Amazon to:",
          },
          {
            kind: "address",
            lines: [
              "KPMG Lakehouse",
              "*PROGRAM NAME AND PROGRAM DATE*",
              "Attn: KPMG Program Delivery",
              "Materials Room — planner's or EPM's name",
              "9301 Lake Nona Blvd",
              "Orlando, FL 32827",
            ],
          },

          {
            kind: "list",
            items: [
              "Give tracking numbers and expected arrival dates to your Lead Planner.",
              "For anything going back after the event, provide a return shipping label to your Lead Planner.",
            ],
          },
        ],
        source: SRC,
      },
    ],
  },
  {
    slug: "app-and-wifi",
    title: "Lakehouse app and Wi-Fi",
    intro: "The digital key, the agenda, and getting online.",
    status: "live",
    sections: [
      {
        id: "app",
        title: "Lakehouse mobile app",
        blocks: [
          {
            kind: "para",
            text: "The app is open to KPMG professionals and invited guests and acts as the program companion: digital key, daily schedule, wayfinding, food and beverage and more. Documents can be added for participants — send the planner a link or PDF three business days before the program starts.",
          },
          {
            kind: "note",
            text: "Download using the links for your device type and management before you travel. Instructions go out in the Accommodations Confirmation; see the Lakehouse App Quick Reference Guide for detail.",
          },
        ],
        source: SRC,
      },
      {
        id: "wifi",
        title: "Wi-Fi",
        blocks: [
          {
            kind: "list",
            items: [
              "ITS Wireless — KPMG laptops connect automatically. No VPN needed.",
              "Mobile Wireless — managed mobile devices connect automatically.",
              "Lakehouse Guest — unmanaged mobile and other wireless devices self-connect here.",
              "Download content before you arrive; firewall restrictions can block external sites.",
            ],
          },
        ],
        source: SRC,
      },
    ],
  },
  {
    slug: "stores-and-gifts",
    title: "Stores and client gifts",
    intro: "Lakehouse Store, Ignition Gear Store and gift delivery.",
    status: "live",
    sections: [
      {
        id: "stores",
        title: "The stores",
        blocks: [
          {
            kind: "list",
            items: [
              "The Lakehouse Store stocks branded merchandise, sundries and citizenship impact items. Inventory changes, so work with your PD Planner on gift options. Vouchers can be bought in any denomination.",
              "Ignition Gear Store (KPMGGear.com) — if items are going to clients, agree delivery logistics with the PD Planner. The Ignition lead handles shipping and packaging.",
            ],
          },
        ],
        source: SRC,
      },
      {
        id: "gifts",
        title: "Delivering gifts",
        blocks: [
          {
            kind: "list",
            items: [
              "Gifts can be handed over on arrival by the Lobby Experience team with the name badge, set in the meeting room, or delivered to the guest room.",
              "Lakehouse packages store purchases in a gift bag. The stakeholder or Ignition lead prints notecards and provides them three business days before delivery.",
              "Tell the PD Planner a gift is being given so the delivery method can be confirmed. Gift bags can be bought by Lakehouse on your behalf at additional cost.",
            ],
          },
        ],
        source: SRC,
      },
    ],
  },
  {
    slug: "meeting-space",
    title: "Meeting space setup",
    intro: "Room sets, AV, whiteboards and clean-up expectations.",
    status: "live",
    sections: [
      {
        id: "setup",
        title: "Room setup",
        blocks: [
          planner,
          {
            kind: "list",
            items: [
              "The PD Planner agrees tables and chairs, AV, materials and whiteboards. Confirm all logistics by the Monday of the week before the meeting.",
              "A facilitation table is required in each classroom to drive the built-in technology.",
              "Innovation Lab soft seating stays in PE203. Lobby furniture and greenery cannot be used for meeting seating or filming.",
              "Request set-up days before the meeting as early as possible for review and approval.",
              "Detailed timings for set-up, session and teardown are needed for door signage, room sets and refreshes.",
              "Do not set up in spaces not reserved for your program.",
            ],
          },
        ],
        source: SRC,
      },
      {
        id: "av",
        title: "Audio visual and whiteboards",
        blocks: [
          {
            kind: "list",
            items: [
              "Classrooms carry substantial built-in technology. For extras such as flipcharts, Samsung Flips or Microsoft Surface Hubs, talk to your PD Planner about availability and cost.",
              "Ignition has 28 rolling whiteboards, plus 4 on loan from Lakehouse. Give your planner the quantity you need to confirm availability before you arrive.",
            ],
          },
        ],
        source: SRC,
      },
      {
        id: "cleanup",
        title: "Clean-up and reset expectations",
        blocks: [
          {
            kind: "para",
            text: "Ignition clears all session materials and supplies at the end of each session: stickies, tape and whiteboard writing removed, surfaces cleared, larger items labelled as trash or disposed of in the room's designated areas. Leave the room as you would want to receive it. Trash removal and wiping down tables are handled separately by facility staff.",
          },
          {
            kind: "note",
            text: "For overnight or multi-day sessions, Lakehouse staff refresh the space but leave materials as they are until told to reset or the meeting ends.",
          },
        ],
        source: SRC,
      },
      {
        id: "pivots",
        title: "Agenda pivots and mid-session changes",
        blocks: [
          {
            kind: "para",
            text: "Changes are common in Ignition agendas and Lakehouse staff will always try to accommodate them. Ignition sets and resets the furniture and materials inside the room; work with your PD Planner and Hyatt on moving furniture in and out of it.",
          },
          {
            kind: "list",
            items: [
              "If you need to add or remove furniture mid-session, tell your PD Planner as soon as you know.",
              "Do not move boards or materials out into the corridor.",
              "Hyatt colleagues will help set up furniture in the room as needed.",
            ],
          },
          {
            kind: "note",
            text: "Dancing walls must stay in the room they belong to — the Innovation Lab or the Living Labs — at all times, and only Ignition staff may move them. Hyatt and Lakehouse team members are specifically instructed not to move them.",
          },
        ],
        source: SRC,
      },
    ],
  },
  {
    slug: "materials-and-supplies",
    title: "Materials and supplies",
    intro: "What Lakehouse stocks, what Ignition stocks, and how to request it.",
    status: "live",
    sections: [
      {
        id: "process",
        title: "How to request",
        blocks: [
          {
            kind: "list",
            items: [
              "Ancillary supply requests go to the Session Readiness Coordinator by email at least 7 days before the session.",
              "For sessions in an Ignition space, the Ignition team gathers what it needs and returns unused items at the end.",
              "For sessions in a Lakehouse classroom or Illumination Hall, the Ignition team collects supplies from Innovation Lab storage, moves them to the assigned space, and returns unused items afterwards.",
              "Large black foam boards: notify the program planner and EPM so movement support can be scheduled — these are dropped off and returned for you.",
            ],
          },
        ],
        source: SRC,
      },
      {
        id: "lakehouse-stock",
        title: "Lakehouse standard supplies",
        blocks: [
          {
            kind: "list",
            items: [
              "Blank name tents",
              "3x3 Post-it notes",
              "Voting dots",
              "Dry erase markers",
              "Black Sharpies",
              "Tabletop flipcharts",
              "Standing flipcharts",
            ],
          },
        ],
        source: SRC,
      },
      {
        id: "ignition-stock",
        title: "Ignition supplies (Innovation Lab closet)",
        blocks: [
          {
            kind: "list",
            items: [
              "Easels for flipcharts and foamboards; rolls of white and brown paper",
              "Whiteboard wipes (shop towels); Expo low-odour chisel tip markers",
              "Sharpies: chisel tip king size and standard, fine point in black, blue, red and green; flipchart markers; Neuland visual capture markers",
              "Tape: double-sided scotch, scotch, artist (white), ScotchBlue painter, gaffers, clear packing with dispenser",
              "Post-its: 8x6, 6x4 and 3x3 unlined in green, yellow, orange and pink; 3x5 blue with borders",
              "Scissors, box cutters, exacto knife, ruler/yardstick/measuring tape, tac putty, heavy duty magnets and push pins",
              "Pens, highlighters, note cards, 3x5 index cards (ruled and unruled), Ignition note pads small and large",
              "Avery round labels: #5472 (RGYB), #5408 (white), #5407 (colour rings), #5465 (orange); stars",
              "Video camera and SD cards, tripod",
              "Bias cards, Legos, puzzles, supply organisation cubes for tables",
            ],
          },
          { kind: "note", text: "Restocking and questions: Toni Latimore (primary) or LaTanya Dunson (secondary)." },
        ],
        source: SRC,
      },
    ],
  },
  {
    slug: "room-setups",
    title: "Room setup examples",
    intro: "The standard sets for the Innovation Lab and classrooms.",
    status: "live",
    sections: [
      {
        id: "innovation-lab-sets",
        title: "Innovation Lab",
        blocks: [
          {
            kind: "list",
            items: [
              "Plenary only — set to the number of attendees, using Ignition soft seating.",
              "Plenary and breakouts, 0–20 people — add the production table (a classroom table) to the right of the monitor; dancing walls stay in the back nooks; single board carts in the nooks under the split flap or behind the production table; remove circular high-tops and extra high chairs. Typically 20 comfortable chairs in two rows facing the monitor with 6 low tables between.",
              "Plenary and breakouts, 20–30 people — soft seating plus 2 rectangular high-top tables with 4 chairs each.",
              "Plenary and breakouts, 30–40 people — two variants; the facilitation team moves ottomans and lounge chairs between the main and breakout areas as needed (9 ottomans, 20–22 lounge chairs total).",
            ],
          },
          {
            kind: "note",
            text: "In every Innovation Lab set the built-in Ignition monitor and dancing walls are used; classroom screens and ceiling projectors are not engaged. Tell your planner how many rolling whiteboards you need.",
          },
        ],
        source: SRC,
      },
      {
        id: "classroom-sets",
        title: "Classrooms",
        blocks: [
          {
            kind: "list",
            items: [
              "Single classroom — pod of 6, hollow square, or extended U-shape, using classroom tables and executive chairs with 1–2 projection screens.",
              "Single classroom breakout — banquet chairs and a low cocktail table, with 2–4 projection screens.",
              "Double classroom — pod of 6, or classroom tables and executive chairs with added banquet chairs and low cocktail tables, with 2–4 projection screens.",
              "All classrooms have built-in whiteboards fixed to the wall; give your planner the number of rolling whiteboards you need.",
            ],
          },
        ],
        source: SRC,
      },
    ],
  },
];

import type { Page } from "./types";

const SRC = "Ignition Delivering at Lakehouse — Planning and Experience Resource Guide (updated September 2026)";

const AWAITING = "Awaiting content — nothing in the current deck covers this yet.";

export const philosophy: Page = {
  slug: "philosophy",
  code: "PH",
  title: "The why behind our spaces",
  kicker: "Philosophy",
  intro:
    "Our spaces are a key component of the Ignition capability. The physical environment acts as a catalyst — shaping attention, mood, behaviour and ultimately decisions. When thoughtfully designed, it becomes a silent facilitator that nudges teams toward insight, alignment and action.",
  status: "live",
  sections: [
    {
      id: "principles",
      title: "Our environmental principles",
      blocks: [
        {
          kind: "list",
          items: [
            "Flexibility and modularity — adaptable spaces foster creative shifts and pivots in the agenda, and responsiveness to group dynamics.",
            "Psychological safety — comfort, inclusion and low-stakes 'fail-fast' zones enable participation and openness.",
            "Biophilic and sensory design — natural light, greenery, soundscapes and tactile materials support a sense of safety and focus.",
            "Environmental cues and nudges — objects, layouts and affordances subtly guide behaviour and social interaction, provoking conversation and the exchange of ideas.",
            "Technology as enabler — visual displays, VR and interactive surfaces expand how decisions are made, visualised and communicated, and create memorable moments.",
            "Spatial diversity — a mix of quiet, social and reflective zones empowers autonomy and supports multiple thinking modes.",
          ],
        },
      ],
      photos: [
        {
          file: "image107",
          caption:
            "The why behind our spaces — 'Next gen leadership: where ideas take flight' mural in the Living Lab",
        },
      ],
      source: SRC,
    },
    {
      id: "overview",
      title: "The spaces at a glance",
      blocks: [
        {
          kind: "list",
          items: [
            "Innovation Lab (PE203) — flexible, tech-enabled main session space.",
            "Living Lab — always-on exhibit and collaboration space, bundled with the Innovation Lab for booking.",
            "Story Lab — always-on, confessional-style testimonial booth.",
            "Immersive Room — under construction; content to follow.",
          ],
        },
      ],
      photos: [
        { file: "image60", caption: "Innovation Lab (PE203) — main session space" },
        { file: "image108", caption: "Living Lab — exhibit area and mobile screens" },
        { file: "image115", caption: "Story Lab — testimonial booth" },
        { file: "immersive-room", caption: "Immersive Room — opens November 2026" },
      ],
      source: SRC,
    },
    {
      id: "lakehouse-layout",
      title: "Lakehouse layout and visual tour",
      blocks: [
        {
          kind: "para",
          text: "Level 1 and level 2 floorplans for orientation, plus a visual tour of Lakehouse. The Innovation Lab is Pier East 203 on level 2.",
        },
      ],
      photos: [
        { file: "tour-lobby-main", caption: "Lobby — main seating and reception" },
        { file: "tour-lobby-lounge-stair", caption: "Lobby — lounge beside the feature stair" },
        { file: "tour-lobby-seating-colour", caption: "Lobby — colour lounge seating" },
        { file: "tour-lobby-garden-lounge", caption: "Lobby — garden lounge" },
        { file: "tour-lobby-entrance", caption: "Lobby — main entrance" },
        { file: "tour-the-store", caption: "The Store" },
        { file: "tour-exchange-main", caption: "Dining — The Exchange, upper level" },
        { file: "tour-exchange-servery", caption: "The Exchange — servery and open kitchen" },
        { file: "tour-exchange-deli", caption: "The Exchange — deli counter" },
        { file: "tour-exchange-lower-level", caption: "The Exchange — lower level dining" },
        { file: "tour-exchange-booths", caption: "The Exchange — booth seating" },
        { file: "tour-exchange-kitchen", caption: "The Exchange — kitchen counter dining" },
        { file: "tour-common-ground", caption: "Dining — Common Ground café" },
        { file: "tour-nourishment-station", caption: "Nourishment station" },
        { file: "tour-blend-library", caption: "Blend — library lounge" },
        { file: "tour-blend-bar", caption: "Blend — bar" },
        { file: "tour-blend-lounge", caption: "Blend — main lounge and bar" },
        { file: "tour-the-landing-aerial", caption: "The Landing — aerial view of the lake and pavilion" },
        { file: "tour-stretch-entrance", caption: "Stretch — fitness facility entrance" },
        { file: "tour-stretch-weights", caption: "Stretch — weights floor" },
        { file: "tour-stretch-cardio", caption: "Stretch — cardio floor" },
        { file: "tour-learning-classroom-windows", caption: "Learning space — classroom with lake views" },
        { file: "tour-learning-classroom-screen", caption: "Learning space — classroom with projection screen" },
        { file: "tour-learning-breakout-blue", caption: "Learning space — small breakout room" },
        { file: "tour-learning-boardroom-green", caption: "Learning space — boardroom" },
        { file: "tour-learning-boardroom-orange", caption: "Learning space — boardroom with dual screens" },
        { file: "image149", caption: "Learning space — lounge-style set-up" },
        { file: "tour-stadium-steps", caption: "Stadium steps" },
        { file: "tour-guest-room", caption: "Guest room" },
        { file: "tour-guest-bathroom-shower", caption: "Guest room — bathroom" },
        { file: "tour-guest-bathroom-vanity", caption: "Guest room — vanity" },
        { file: "tour-guest-lounge", caption: "Guest floor lounge" },
        { file: "tour-guest-lounge-kitchen", caption: "Guest floor lounge — pantry and kitchen" },
      ],
      source: SRC,
    },
  ],
};

export const innovationLab: Page = {
  slug: "innovation-lab",
  code: "IL",
  title: "Innovation Lab",
  kicker: "Pier East 203",
  intro:
    "The Innovation Lab is our flexible, tech-enabled main session space: a 32:9 touch screen wall, four dancing walls, a split flap message board, the cabinet of curiosities and soft seating designed to keep people moving and engaged.",
  status: "live",
  sections: [
    {
      id: "photos",
      title: "Photos",
      summary: "General views of the room.",
      blocks: [
        {
          kind: "note",
          text: "Participant capacity is 20–25, and up to 30 when the room is used in plenary format only.",
        },
      ],
      photos: [
        { file: "image60", caption: "Screen wall and soft seating from the back of the room" },
        { file: "image61", caption: "Seating pods facing the windows" },
        { file: "image62", caption: "Room set for plenary with movable seating" },
        { file: "image63", caption: "Seating and dancing walls along the window side" },
        { file: "image90", caption: "Room looking towards the whiteboard wall" },
        { file: "image91", caption: "Room looking towards the screen wall" },
        { file: "image92", caption: "Cabinet of curiosities shelving" },
        { file: "image93", caption: "High tables and stools at the back of the room" },
        { file: "image94", caption: "Split flap board and lounge seating" },
        { file: "image95", caption: "Facilitator desk and control keyboard" },
      ],
      source: SRC,
    },
    {
      id: "features",
      title: "Features",
      summary: "What the room offers, its zones, furniture and set-up options.",
      blocks: [
        {
          kind: "list",
          items: [
            "Dancing walls — tech-enabled walls with two mounted whiteboards, two felt boards and a wifi Avocor screen. Use them to bolster presentations, run breakouts, play video or partition the space.",
            "Furniture — intentionally little or no table space, to keep focus on the materials and exercises. High-tops and larger tables at the back are usually used by the Ignition or account team.",
            "Screen wall — large 32:9 touch-enabled wall that makes presentations and hybrid sessions more immersive.",
            "Split flap board — a new way to highlight sound bites, agenda moments or events. It makes a lot of noise, so use it with intention.",
            "Cabinet of curiosities — a wall of artefacts and tokens of innovation, from Lego astronauts to sculpture, some made by Ignition members.",
          ],
        },
        {
          kind: "para",
          text: "Zones: entrance, plenary area, breakout area, production area, and the back of room where the dancing walls are stored.",
        },
        {
          kind: "list",
          items: [
            "Furniture inventory: 20 lounge chairs (approx. 30\"x30\"), 12 high back stools (approx. 20\"x20\"), 2 sofas on casters (88\"x30\"), 9 ottomans (24\" diameter), 2 height-adjustable tables (36\" diameter), 2 bar height tables (60\"x30\"), 8 side tables (20\"x19\").",
          ],
        },
        {
          kind: "para",
          text: "Set-up examples run from plenary only, through plenary and breakouts for 0–20, 20–30 and 30–40 people. All of them use Ignition soft seating with the built-in monitor and dancing walls; classroom screens and ceiling projectors are not engaged. Tell your planner how many rolling whiteboards you need.",
        },
        {
          kind: "note",
          text: "Work with your planner before you arrive to agree the furniture set-up. For help moving furniture on the day, call concierge on (407) 664-5939. Once furniture is removed from the room, bringing it back requires advance notice. Dancing walls are not to leave the Innovation Lab, and Innovation Lab soft seating can only be used in PE203.",
        },
      ],
      photos: [
        { file: "image59", caption: "Innovation Lab furniture inventory" },
        { file: "image76", caption: "Example 'plenary' set-up using all the furniture" },
        { file: "image80", caption: "Innovation Lab zones" },
        { file: "image81", caption: "Room set-up example #1 — plenary only" },
        { file: "image82", caption: "Room set-up example #1 — entrance view" },
        { file: "image83", caption: "Room set-up example #2 — plenary and breakouts" },
        { file: "image84", caption: "Room set-up example #2 — 0–20 people" },
        { file: "image85", caption: "Room set-up example #4 — 0–20 people" },
        { file: "image86", caption: "Room set-up example #5 — 20–30 people" },
        { file: "image87", caption: "Room set-up example #6A — 30–40 people" },
        { file: "image88", caption: "Room set-up example #6B — 30–40 people" },
      ],
      source: SRC,
    },
    {
      id: "artefacts",
      title: "Artefacts",
      summary: "The named objects in the room and the stories behind them.",
      blocks: [
        {
          kind: "para",
          text: "Dancing walls — four in the Innovation Lab, each numbered near the bottom. The numbers match their Alleo display names (IGN-LKH-DWALL1 and so on). Only three of the four are currently Alleo-enabled. To store them, unplug them, put the power cord under the Avocor screen behind the mounted whiteboards, then wheel them into the back recesses near the whiteboard racks.",
        },
        {
          kind: "para",
          text: "Split flap board — a programmable announcement board, also called the train station board. It is commonly used to welcome groups, announce lunch or give a farewell message, and it is loud, so it will interrupt whoever is speaking. Control it from the iPad on the credenza: open Safari, where the correct tab should already be loaded. Contact Kieran Ramnarine on Teams if there is an issue.",
        },
        {
          kind: "para",
          text: "Cabinet of curiosities — the concept comes from 19th-century Britain, where explorers brought objects back to share at events that preceded modern museums. The conversations around those objects sparked curiosity and new ways of thinking. Use the photo as the reference for how the cabinet should look; if anything is out of place, put it back.",
        },
        {
          kind: "list",
          items: [
            "Flag — the yellow flag with the black dot is the phonetic letter I (as in India), standing for new ways of communicating and expressing ideas.",
            "Astronaut — exploring where no one has gone before. The Lego astronaut was built by Jerry Change of the Ignition team.",
            "Unknown Gnome — a light, whimsical way to think about asking questions and exploring the unknown.",
            "Apollo bust — the Greek god of light, poetry and prophecy; harmony, reason and moderation.",
          ],
        },
        {
          kind: "para",
          text: "Screen wall — a touch-enabled 32:9 digital wall that runs as a computer, for presentations through Alleo and PowerPoint via HDMI. Alleo is preferred because it makes the touch enablement usable and lets the dancing walls share the same board. If you present a deck, share wirelessly via Alleo where possible; otherwise add a picture-in-picture for HDMI or Polycom from the Cyviz tablet to the left of the wall. That is a 16:9 ratio, so use the dressing deck on the screen wall PC to fill the sides. The HDMI plug is at the back between the two dancing wall recesses, so your laptop stays at the back unless IT runs a cable to the front. Design content in 32:9 to use the whole screen.",
        },
        {
          kind: "para",
          text: "Furniture — the Innovation Lab furniture is deliberately different to the other spaces, with little table space, to direct people to engaged listening and make it easy to move around and take part in human-centred methods.",
        },
        {
          kind: "contact",
          name: "Kieran Ramnarine",
          role: "First call for the screen wall, dancing walls and split flap board",
          detail: "Lakehouse IT backup: Carlos Diaz, cdiaz5@kpmg.com",
        },
      ],
      photos: [
        { file: "image64", caption: "Dancing wall storage" },
        { file: "image65", caption: "Dancing wall — Avocor screen" },
        { file: "image66", caption: "Split flap board" },
        { file: "image67", caption: "Split flap board detail" },
        { file: "image68", caption: "Split flap board — credenza and iPad" },
        { file: "image69", caption: "Cabinet of curiosities" },
        { file: "image70", caption: "Cabinet of curiosities — shelf detail" },
        { file: "image71", caption: "Screen wall" },
        { file: "image72", caption: "Screen wall detail" },
        { file: "image73", caption: "Screen wall — room view" },
        { file: "image74", caption: "Innovation Lab furniture" },
        { file: "image75", caption: "Innovation Lab furniture detail" },
      ],
      source: SRC,
    },
    {
      id: "technology",
      title: "Technology",
      summary: "How to switch the room on and run a session.",
      blocks: [
        {
          kind: "list",
          items: [
            "Video wall: 32:9 / 7680 x 2160 / 55\" — 4x2 wall, touch capable on the room PC only.",
            "Cyviz room control, wall mounted.",
            "Microsoft Teams Room, six One Beyond AI cameras, ceiling microphones with camera control and audio, wireless microphones for soft speakers.",
            "MultiTaction canvas enabled, web browser enabled, Bluetooth enabled for music.",
            "Wired and wireless content sharing from a laptop, plus two projectors on the side walls.",
            "Four dancing walls in the Innovation Lab and two in the Living Lab.",
            "Split flap customisable message board.",
            "Room email: us-mtrlnape203@kpmg.com (Outlook: US-FM MTR LNA PE203 Pier East 203).",
          ],
        },
        {
          kind: "steps",
          items: [
            "Before you travel, tell Kieran when you will be in the lab so he can support you.",
            "Tap the control panel at the front of the wall to wake the controller.",
            "Choose 'Adjust Room Equipment' on the main menu.",
            "Choose 'Power On' under Main Display to turn on the video wall.",
            "Click 'Display' at the bottom of the panel, open the three lines at the top left of the 'Main PC' tab, and tick 'Grid Mode' so the picture-in-picture windows arrange neatly.",
          ],
        },
        {
          kind: "steps",
          items: [
            "Teams call: power on the video wall as above, then add the room to your Teams invite using us-mtrlnape203@kpmg.com.",
            "On the room control panel, open the 'Make a Conference Call' tab to see the Teams interface.",
            "Once the room accepts, the meeting appears in the calendar area on the controller — tap 'Join'.",
            "Teams opens on the main video wall and the controller moves to the Display tab; adjust the view from the 'Conference Call' tab.",
          ],
        },
        {
          kind: "steps",
          items: [
            "Laptop to the main screen: power on the video wall, then connect your laptop to the HDMI socket at the back of the room.",
            "Select 'Add PiP' on the display screen.",
            "Select 'HDMI Rear Wall' from the options at the top of the screen.",
          ],
        },
        {
          kind: "steps",
          items: [
            "Alleo: tell Kieran one to two weeks ahead that you will use Alleo in the space.",
            "Power on the video wall and make sure the top tab on the Display tab is on Main PC.",
            "If the Alleo rooms app is not already running, click it to launch it.",
            "Open your Alleo board on your laptop, click 'Share' in the top right, then 'Open on display'.",
            "Choose the screens: IGN-LKH-Lab, IGN-LKH-DWall1, IGN-LKH-DWall2, IGN-LKH-DWall3.",
          ],
        },
        {
          kind: "para",
          text: "Alleo is good for voting exercises, breakout group exercises, signage and interactivity on the touch screens. On the main video wall use it for the main presentation content, polling and voting, roadmapping and moving stickies between containers. On the dancing walls use it for breakout exercises, extra touch screen space, signage and the flow of the day.",
        },
        {
          kind: "para",
          text: "Dancing walls in a session: coordinate with Kieran ahead of time so they are plugged in and connected. For Alleo, click Share, then Open on display, then select IGN-LKH-DW. Three layout options are available for placing the walls in breakouts; ask Kieran if you need a layout that is not shown.",
        },
        {
          kind: "note",
          text: "Additional touch screens on wheels — both Avocor and Surface Hubs — are available in storage. Coordinate with Kieran Ramnarine or Carlos Diaz if you want to use them.",
        },
      ],
      photos: [
        { file: "image77", caption: "Innovation Lab video wall" },
        { file: "image78", caption: "Avocor mobile screens on dancing walls" },
        { file: "image79", caption: "Split flap message board" },
        { file: "image121", caption: "Getting started — room control panel" },
        { file: "image122", caption: "Getting started — power on the main display" },
        { file: "image123", caption: "Getting started — grid mode" },
        { file: "image124", caption: "HDMI connection at the back of the room" },
        { file: "image125", caption: "HDMI connection detail" },
        { file: "image126", caption: "Add PiP — selecting HDMI Rear Wall" },
        { file: "image127", caption: "Dancing walls in a session" },
        { file: "image128", caption: "Dancing wall layout options" },
      ],
      source: SRC,
    },
    {
      id: "reset",
      title: "Reset",
      summary: "How to leave the Innovation Lab.",
      blocks: [
        {
          kind: "para",
          text: "Goal: return the space to a clean, neutral, client-ready state. The tickable version of this is on the Innovation Lab reset checklist.",
        },
        {
          kind: "list",
          items: [
            "Dancing wall storage — return all four dancing walls to the recessed alcoves at the back, put the whiteboards back on the racks and stow each power cord in the wall.",
            "Furniture — tidy up, remove rubbish, put Ignition materials back in the closet and arrange the furniture in the plenary layout.",
            "Split flap board — using the iPad, reset the board to its generic state, found under the 'Innovation Lab' collections in the app. If flaps show incorrectly, contact Kieran.",
            "Cabinet of curiosities — clean off the credenza, arrange the books neatly and leave several thought leadership pieces out and available (they live in the cabinet under the credenza).",
            "Screen wall — using Cyviz, reset the screen to its original screensaver, or power the whole system down at the end of the day.",
            "Confirm with Kieran that the tech is reset.",
          ],
        },
      ],
      photos: [
        { file: "image89", caption: "Reset — dancing wall storage" },
        { file: "image90", caption: "Reset reference — general view" },
        { file: "image91", caption: "Reset reference — general view" },
        { file: "image92", caption: "Reset reference — general view" },
        { file: "image93", caption: "Reset reference — general view" },
        { file: "image94", caption: "Reset reference — general view" },
        { file: "image95", caption: "Reset reference — general view" },
      ],
      source: SRC,
    },
  ],
};

export const livingLab: Page = {
  slug: "living-labs",
  code: "LL",
  title: "Living Lab",
  kicker: "Exhibit and collaboration space",
  intro:
    "The Living Lab is an always-on exhibit space. The first exhibit spotlights GenAI through immersive branding, the Rapid Value Assessment, the aIQ Hive solution catalog, an interactive transformation story and the 'Gen AI Invaders' game. For booking, it is bundled with the Innovation Lab.",
  status: "live",
  sections: [
    {
      id: "photos",
      title: "Photos",
      summary: "General views of the space.",
      blocks: [
        {
          kind: "para",
          text: "The space is organised into the exhibit area, the disruption artifacts wall and the makerspace.",
        },
      ],
      photos: [
        { file: "image100", caption: "Exhibit area — display screen and shelving" },
        { file: "image101", caption: "Exhibit area — solution screen and artifact shelves" },
        { file: "image102", caption: "Wall of disruption — artifact shelving" },
        { file: "image107", caption: "Maker's Notebook mural and makerspace" },
        { file: "image108", caption: "Makerspace — work table and screens" },
        { file: "image133", caption: "Living Lab floorplan — exhibit, Story Lab and corridor" },
      ],
      source: SRC,
    },
    {
      id: "features",
      title: "Features",
      summary: "What the space offers and how to run a session in it.",
      blocks: [
        {
          kind: "list",
          items: [
            "AI exhibits — encourage participants to interact and ask questions.",
            "Display screen — always on to the left of the wall of disruption, running a video loop of Ignition team members, capabilities and session outcomes.",
            "Wall of disruption — artifacts that each tell a story of pushing the boundaries of possibility.",
            "Totems with pulse checks and a microsite — digital totems with QR codes linked to short surveys.",
            "Maker's notebook mural — the journey from the chaos of idea creation to structured action.",
          ],
        },
        {
          kind: "para",
          text: "Booking: the Living Lab is bundled with the Innovation Lab, so work with your Lakehouse session planner on availability. Light and shade controls are labelled throughout the space; for an outage, call the Lakehouse concierge on 407-664-5939.",
        },
        {
          kind: "para",
          text: "Food and beverage can be included — work with your planner so the nourishment station activation fits your experience. The Living Lab is meant to be an active collaboration space, so some noise and movement is intentional; if you need to reduce distraction, close the glass door and lower the shades.",
        },
        {
          kind: "note",
          text: "Music: connect over Bluetooth from the labelled connection point. Be mindful of participants in the neighbouring space when you use music.",
        },
      ],
      photos: [
        { file: "image97", caption: "Rapid Value Assessment on the exhibit screen" },
        { file: "image98", caption: "aIQ Hive solution catalog on the exhibit screen" },
        { file: "image99", caption: "'Gen AI Invaders' arcade cabinet" },
      ],
      source: SRC,
    },
    {
      id: "artefacts",
      title: "Artefacts",
      summary: "The named exhibits and what they mean.",
      blocks: [
        {
          kind: "para",
          text: "AI exhibits — the first Living Lab exhibit focuses on GenAI, so you will see assets and branding throughout the space. The KPMG Rapid Value Assessment helps clients explore the opportunity of GenAI at scale, and the aIQ Hive catalog showcases a collaborative environment for discovering new AI solutions. An interactive story sets the context for change as clients start their own transformation journey, and the 'Gen AI Invaders' game — designed with help from KPMG generative AI tools — is a light branding activation showing innovation in action. The 'You can with AI' campaign messaging runs through the space, reinforcing our ability to adapt as new technologies such as quantum and spatial emerge.",
        },
        {
          kind: "para",
          text: "Wall of disruption — each artifact on the wall carries a story: a chess set for IBM DeepBlue beating Garry Kasparov; the Lunar Rover for turning the impossible into something real; a design thinking kit from an earlier iteration of Ignition; a rotary phone, because innovation needs communication; the first aeroplane, for making the sky the limit; and a winter snowglobe, a tongue-in-cheek nod to the AI winter.",
        },
        {
          kind: "para",
          text: "Totems with pulse checks and microsite — the digital totems create an interaction point for participants and for Ignition to gather insight on current behavioural trends. The AI pulse check gathers high-level perspectives on AI: how best to integrate it, where the cost savings might be, and how people feel about it. The microsite is a 24/7 directory of what is in the Living Lab, why it matters and who created it.",
        },
        {
          kind: "para",
          text: "Maker's notebook mural — on the left, abstract vignettes and emerging technologies capture the messy early stages of ideation. Moving right, the elements organise into coherent flows and culminate in a lightning bolt: the breakthrough moment. From that spark come three futures — human-centric, tech-driven, and an integrated path that blends the two.",
        },
        {
          kind: "para",
          text: "Display screen — constant information and material showing what Ignition capabilities look like, with fun, engaging content.",
        },
        {
          kind: "contact",
          name: "Chris Brodkey and Maya Lawrence",
          role: "Living Lab content — Lakehouse Living Lab liaison and lead for Living Labs",
          detail: "Technology issues: Kieran Ramnarine or Carlos Diaz",
        },
      ],
      photos: [
        { file: "image102", caption: "Wall of disruption" },
        { file: "image103", caption: "Wall of disruption — artifact detail" },
        { file: "image104", caption: "Wall of disruption — artifact detail" },
        { file: "image105", caption: "Digital totem with pulse check" },
        { file: "image106", caption: "Totem and microsite" },
        { file: "image107", caption: "Maker's notebook mural" },
        { file: "image100", caption: "Display screen" },
        { file: "image101", caption: "Display screen detail" },
      ],
      source: SRC,
    },
    {
      id: "technology",
      title: "Technology",
      summary: "Activating the exhibits and dancing walls.",
      blocks: [
        {
          kind: "steps",
          items: [
            "By default the dancing wall screens display Ceros content — aIQ Hive on one and the GenAI Rapid Assessment on the other.",
            "If a screen is off, press the power button on the Avocor screen and check it is plugged in. The keyboard is stored in the well on the dancing wall, hidden by the soft grey covering.",
            "Click the bottom right corner of the screen to open the menu and switch to the facilitated experience.",
            "Click the arrow under the home screen, then the input button to see all input options.",
            "Select the USB-C input.",
          ],
        },
        {
          kind: "list",
          items: [
            "Source 1 — the internal Avocor PC, running a full-screen browser for public-facing content.",
            "Source 2 — a KPMG PC connected to the Avocor for internal sites and data, such as aIQ Hive and the GenAI RVA. Users log in with their own credentials and must be provisioned for the application.",
            "To change source, press the home button in the bottom right corner. To switch back, press the up arrow on the menu, click input, and select the internal PC.",
            "GenAI Rapid Value Assessment: https://view.ceros.com/kpmg-design/llai-genai-rapid-assessment/p/1 (password LLAI).",
            "aIQ Hive: https://view.ceros.com/kpmg-design/llai-aiq-hive (password LLAI).",
          ],
        },
        {
          kind: "note",
          text: "Totem: Populo signage runs by default. The totem cannot run a web browser — this is not permitted. To customise signage, contact the Populo content manager, Michael Lewis, and plan ahead: updates are not immediate. The same applies to the ambient branding screen in the Living Lab.",
        },
      ],
      photos: [
        { file: "image129", caption: "Activating the Living Lab — dancing wall home screen" },
        { file: "image130", caption: "Activating the Living Lab — input options" },
        { file: "image131", caption: "Activating the Living Lab — switching source" },
      ],
      source: SRC,
    },
    {
      id: "reset",
      title: "Reset",
      summary: "How to leave the Living Lab.",
      blocks: [
        {
          kind: "para",
          text: "Goal: ensure exhibits are functioning, clean and set to default views. The tickable version of this is on the Living Lab reset checklist.",
        },
        {
          kind: "list",
          items: [
            "AI exhibits — reset the dancing walls to their original locations and navigate each site back to its landing page. If you need to log into the RVA or aIQ Hive, contact Kieran Ramnarine or Chris Brodkey.",
            "Wall of disruption — if any artifacts were moved, replace them exactly as the photo shows. You should not be moving artifacts off the wall unless necessary. Dust or clean any surfaces.",
            "Digital totems — reset the microsite totem to the landing page and check the QR code on the pulse check totem still works. Report any issues to IT or Chris Brodkey.",
            "Maker's notebook mural — check for damage or dirt and make sure the mural is easy to view; arrange the furniture and side tables so it is not obscured.",
            "Whiteboards — clean them fully and re-rack them on the wall.",
            "General upkeep — clean the floor, and confirm with Kieran that the tech is reset.",
          ],
        },
      ],
      photos: [
        { file: "image108", caption: "Reset — AI exhibits and dancing walls" },
        { file: "image114", caption: "Reset — Living Lab reference view" },
      ],
      source: SRC,
    },
  ],
};

export const storyLab: Page = {
  slug: "story-lab",
  code: "SL",
  title: "Story Lab",
  kicker: "Testimonial booth",
  intro:
    "An always-on, confessional-style booth ready to capture testimonials from KPMG people and clients. It works well at the end of a session, and for multi-client forums or experiential sessions that benefit from word-of-mouth sharing.",
  status: "live",
  sections: [
    {
      id: "photos",
      title: "Photos",
      summary: "General views of the booth.",
      blocks: [],
      photos: [
        { file: "image115", caption: "Story Lab — booth" },
        { file: "image116", caption: "Story Lab — seating" },
        { file: "image117", caption: "Story Lab — camera and screen" },
      ],
      source: SRC,
    },
    {
      id: "features",
      title: "Features",
      summary: "What the booth is for and how to prepare participants.",
      blocks: [
        {
          kind: "para",
          text: "The Story Lab captures testimonials from clients and KPMG participants, recording experiences and takeaways for microsites, debriefs and business development. Prep participants ahead of time with a slide explaining what the Story Lab is and why it is useful. An Ignition swag bag helps grease the wheels.",
        },
        {
          kind: "para",
          text: "Inside there are two comfortable chairs and a side table for coffee. You may want a stool or high chair to frame participants more closely; the camera auto-focuses and follows, but some people find the chair a little awkward.",
        },
        {
          kind: "list",
          items: [
            "Prepare three session-specific questions, for example: what are the key takeaways from the session?",
            "What was your experience like at Lakehouse?",
            "A fun question, such as: what was your favourite meal or activity?",
          ],
        },
        {
          kind: "para",
          text: "All videos upload to SharePoint, where they can be shared or used for microsites, sizzle reels or debrief decks. Remind participants they must stop recording and upload — this can also be done afterwards.",
        },
        {
          kind: "contact",
          name: "Michael Lewis",
          role: "Supports the Story Lab — contact him to update the questions",
          detail: "michaeljlewis@kpmg.com",
        },
      ],
      photos: [
        { file: "image118", caption: "Uploading to SharePoint" },
        { file: "image119", caption: "Recording controls" },
        { file: "image120", caption: "Upload icon" },
      ],
      source: SRC,
    },
    {
      id: "artefacts",
      title: "Artefacts",
      summary: "Named objects in the space.",
      blocks: [
        {
          kind: "note",
          text: AWAITING + " The Story Lab has no separate artefacts in the current deck.",
        },
      ],
      awaiting: true,
      source: SRC,
    },
    {
      id: "technology",
      title: "Technology",
      summary: "The SociaLive recording process, step by step.",
      blocks: [
        {
          kind: "steps",
          items: [
            "The client enters the Story Lab and views the instructions on screen via SociaLive, then selects the button set for an Ignition or a Lakehouse session.",
            "The client selects 'Record' — up to three minutes of testimonial.",
            "The system counts down from five seconds before recording starts.",
            "The client selects the red square button to end the recording.",
            "A dialogue box appears showing 'My Recordings', with 'Recording Captured' at the top right.",
            "The client can review it with 'Play'. If they are not happy, they can delete it and start again using the blue arrow.",
            "To enlarge, click the three dots next to the recording and choose 'Fullscreen'.",
            "When they are satisfied, they click upload to save to the SociaLive server.",
            "After upload the screen returns to the home screen following three minutes of inactivity.",
          ],
        },
      ],
      photos: [
        { file: "image134", caption: "Story Lab — home screen" },
        { file: "image135", caption: "Selecting the record button" },
        { file: "image136", caption: "Countdown before recording" },
        { file: "image137", caption: "Ending the recording" },
        { file: "image138", caption: "Recording captured dialogue" },
        { file: "image139", caption: "Reviewing the recording" },
        { file: "image140", caption: "Fullscreen view" },
        { file: "image141", caption: "Uploading the recording" },
      ],
      source: SRC,
    },
    {
      id: "reset",
      title: "Reset",
      summary: "How to leave the Story Lab.",
      blocks: [
        {
          kind: "list",
          items: [
            "Check that recordings have been uploaded to SharePoint before people leave.",
            "Tidy the chairs and side table and remove any cups or materials.",
            "Leave the screen on the SociaLive home screen.",
          ],
        },
        {
          kind: "note",
          text: "The current deck has no formal Story Lab reset checklist — these are the practical steps drawn from the recording process. Send us the wording you want and it will replace this.",
        },
      ],
      source: SRC,
    },
  ],
};

export const immersiveRoom: Page = {
  slug: "immersive-room",
  code: "IR",
  title: "Immersive Room",
  kicker: "Coming soon — November 2026",
  intro:
    "The Immersive Room is being built now and is expected to open in November 2026. The headings below are ready so content can drop straight in as it becomes available.",
  status: "awaiting-content",
  sections: [
    {
      id: "photos",
      title: "Photos",
      blocks: [],
      photos: [
        { file: "immersive-room", caption: "Immersive Room — curved screen wall and reception desk" },
      ],
      source: SRC,
    },
    { id: "features", title: "Features", blocks: [{ kind: "note", text: AWAITING }], awaiting: true, source: SRC },
    { id: "artefacts", title: "Artefacts", blocks: [{ kind: "note", text: AWAITING }], awaiting: true, source: SRC },
    { id: "technology", title: "Technology", blocks: [{ kind: "note", text: AWAITING }], awaiting: true, source: SRC },
    { id: "reset", title: "Reset", blocks: [{ kind: "note", text: AWAITING }], awaiting: true, source: SRC },
  ],
};

export const universalSetup: Page = {
  slug: "universal-setup",
  code: "US",
  title: "Universal set-up details",
  kicker: "All spaces",
  intro:
    "Standards that apply across every Ignition space: pens, cables, sticky notes, whiteboards and dancing walls.",
  status: "live",
  sections: [
    {
      id: "standards",
      title: "Set-up standards",
      blocks: [
        {
          kind: "list",
          items: [
            "Pens and Expos live in holders, either on tables or in the magnetic cups on whiteboards, point down.",
            "Cables are wound and placed in their locations — the folding door closet in the Living Lab, and in the Innovation Lab the closet closest to the back wall (IT may need to give access) or the credenza drawers.",
            "Sticky notes are replenished in each space. In the Living Lab, each table and whiteboard area is stocked with varying colours. In the Innovation Lab, sticky notes go on tables if the room is set up, and storage stock is checked and replenished.",
            "Whiteboards are cleaned fully and placed on racks if mountable, or given to concierge services if they are rolling boards.",
            "Dancing walls: in the Innovation Lab all four return to the recessed area at the back of the room in front of the whiteboard mounts. In the Living Lab they return to the locations shown in the reset photos.",
          ],
        },
        {
          kind: "note",
          text: "Extra touch screens on wheels — Avocor and Surface Hubs — are in storage. Coordinate with Kieran Ramnarine or Carlos Diaz to use them.",
        },
      ],
      source: SRC,
    },
    {
      id: "storage",
      title: "Storage and supply closets",
      blocks: [
        {
          kind: "para",
          text: "Use the photo as the reference for putting supplies away and keeping storage tidy after a session. The main supply closet is in PE203 / the Innovation Lab.",
        },
        {
          kind: "note",
          text: "Access to extra or non-standard supplies and swag must be arranged through your PD Planner and the Ignition Session Readiness Coordinator team. Supply areas should only be accessed with prior approval from Lakehouse leadership.",
        },
      ],
      photos: [{ file: "image51", caption: "Ignition supplies organisation — supply closet in PE203" }],
      source: SRC,
    },
  ],
};

export const spacePages: Page[] = [
  philosophy,
  innovationLab,
  livingLab,
  storyLab,
  immersiveRoom,
  universalSetup,
];

/*
  PROJECTS DATA
  =============
  This is the only file you need to touch to add, edit, or reorder projects.
  Each entry is one project card + its detail view. Fields:

  id          - unique short slug, no spaces (used internally)
  title       - project name shown on the card and in the detail view
  status      - one of: "active" | "prototype" | "concept"
                active    = currently being worked on
                prototype = playable / feature-complete build, not in active dev
                concept   = early-stage / exploratory
  build       - a version-style label, e.g. "0.6" — purely cosmetic, use
                whatever reflects how far along it is
  year        - e.g. "2026"
  tagline     - one sentence, shows on the card
  role        - your role, e.g. "Solo developer" or "Programmer, 3-person team"
  tools       - array of short strings, shown as tags
  summary     - a short paragraph (2-5 sentences) shown in the detail view
  youtubeId   - the ID from a YouTube URL, e.g. for
                https://www.youtube.com/watch?v=dQw4w9WgXcQ the ID is "dQw4w9WgXcQ"
                Leave as "" if you don't have a video yet — the card will
                just skip the embed.
  thumbnail   - path to a still image used on the card, e.g. "images/friendslop-thumb.jpg"
                Leave as "" to show a plain placeholder.
  gallery     - array of image paths for the detail view screenshots,
                e.g. ["images/friendslop-1.jpg", "images/friendslop-2.jpg"]
                Leave as [] if you don't have any yet.

  Order in this array = order on the page, top to bottom / left to right.
  Drop a new object in wherever you want it to appear.
*/

const PROJECTS = [
  {
    id: "friendslop",
    title: "Friendslop",
    status: "active",
    build: "0.6",
    year: "2026",
    tagline: "A multiplayer physics brawler where ragdolls do most of the talking.",
    role: "Solo developer",
    tools: ["Unity", "Photon Fusion", "C#"],
    summary: "A couch-and-online brawler built around active ragdoll physics — camera-relative movement, wall-climbing, and dive mechanics layered on top of a networked round and scoring system. Most of the build time has gone into making the ragdoll state transitions feel readable and controllable instead of chaotic, while keeping the physics comedy that makes the genre fun.",
    youtubeId: "",
    thumbnail: "",
    gallery: []
  },
  {
    id: "tactical-rpg",
    title: "Tactical RPG prototype",
    status: "prototype",
    build: "0.9",
    year: "2026",
    tagline: "A 2D turn-based tactics game with a full roguelike meta-map and content pipeline.",
    role: "Solo developer",
    tools: ["Unity", "C#", "ScriptableObjects"],
    summary: "A complete tactical RPG prototype built in five phases: core combat with BFS pathfinding and turn order, procedural hero and enemy generation, a polished combat UI with animated turn order and floating damage numbers, a procedurally generated roguelike meta-map with fog of war, and full run scenes for party select, rest, and recruitment. Content is authored through a custom visual grid editor and a JSON import pipeline, so new battles and encounters don't need code changes.",
    youtubeId: "",
    thumbnail: "",
    gallery: []
  },
  {
    id: "bullet-heaven",
    title: "Bullet-heaven prototype",
    status: "prototype",
    build: "0.4",
    year: "2025",
    tagline: "A 3D survivors-like with a modular, data-driven spell system.",
    role: "Solo developer",
    tools: ["Unity", "C#", "ScriptableObjects"],
    summary: "A bullet-heaven prototype built around a ScriptableObject-based spell and modifier architecture, so new spells and modifiers can be composed without writing new code paths. Shipped Multicast, Homing, and Pierce modifiers alongside a Frost Nova AoE spell, with freeze visuals consolidated into a single shared effects component across enemy types.",
    youtubeId: "",
    thumbnail: "",
    gallery: []
  },
  {
    id: "arcade-driving",
    title: "Arcade driving game",
    status: "concept",
    build: "0.1",
    year: "2026",
    tagline: "A top-down arcade driver about physics chaos and destruction.",
    role: "Solo developer",
    tools: ["Unity", "C#", "Rigidbody physics"],
    summary: "An early-stage top-down arcade driving game in the spirit of Smashy Road: Wanted, built on Kenney's CC0 asset packs. The core differentiator is leaning hard into physics chaos — vehicles, props, and environments that break and scatter convincingly rather than just serving as scenery.",
    youtubeId: "",
    thumbnail: "",
    gallery: []
  }
];

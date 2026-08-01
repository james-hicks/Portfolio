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
  build       - a version-style label, e.g. "0.6". Purely cosmetic, use
                whatever reflects how far along it is
  year        - e.g. "2026"
  tagline     - one sentence, shows on the card
  role        - your role, e.g. "Solo developer" or "Programmer, 3-person team"
  tools       - array of short strings, shown as tags
  summary     - a short paragraph (2-5 sentences) shown in the detail view
  youtubeId   - the ID from a YouTube URL, e.g. for
                https://www.youtube.com/watch?v=dQw4w9WgXcQ the ID is "dQw4w9WgXcQ"
                Leave as "" if you don't have a video yet. The card will
                just skip the embed.
  thumbnail   - path to a still image used on the card, e.g. "images/friendslop-thumb.jpg"
                Leave as "" to show a plain placeholder.
  gallery     - array of image paths for the detail view screenshots,
                e.g. ["images/friendslop-1.jpg", "images/friendslop-2.jpg"]
                Leave as [] if you don't have any yet.
  itchUrl     - link to the game's page on itch.io, e.g.
                "https://leyamez.itch.io/friendslop"
                Leave as "" to hide the play link/button for that project.
  itchEmbed   - the src URL for an itch.io embedded widget, if you want the
                game actually playable inside the popup instead of just
                linked out. On the game's itch.io dashboard page, look for
                "Edit game" -> embed options, or use the widget generator at
                https://itch.io/user/settings/... under your game's page ->
                "Embed" tab, which gives you an iframe src like
                "https://itch.io/embed-upload/123456?color=..."
                Only works if the game's visibility/embedding is set to
                allow it. Leave as "" to just show the itchUrl link instead.

  Order in this array = order on the page, top to bottom / left to right.
  Drop a new object in wherever you want it to appear.
*/

const PROJECTS = [
  {
    id: "boomeroo",
    title: "Boomeroo",
    status: "prototype",
    build: "1.0",
    year: "2025",
    tagline: "A fast-paced action game created for GMTK Game Jam 2025.",
    role: "Programmer and Designer",
    tools: ["Unity", "C#"],
    summary: "Boomeroo is an action game created during GMTK Game Jam 2025. Built around a simple gameplay idea, the project focuses on creating a fun and replayable experience within a short development timeline.",
    youtubeId: "",
    thumbnail: "",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/boomeroo",
    itchEmbed: ""
  },
  {
    id: "pokeprice",
    title: "PokePrice",
    status: "prototype",
    build: "1.0",
    year: "2025",
    tagline: "Test your knowledge by guessing the value of Pokémon cards.",
    role: "Solo developer",
    tools: ["Unity", "C#", "API"],
    summary: "PokePrice is a guessing game where players try to predict the value of Pokémon cards. The project explores working with external data and creating a simple but engaging gameplay loop.",
    youtubeId: "",
    thumbnail: "",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/pokeprice",
    itchEmbed: ""
  },
  {
    id: "lumina",
    title: "Lumina",
    status: "prototype",
    build: "1.0",
    year: "2025",
    tagline: "Push through the darkness and find your way forward.",
    role: "Programmer and Designer",
    tools: ["Unity", "C#"],
    summary: "Lumina is a platforming experience focused on navigating through darkness. Created as a small experimental project exploring atmosphere and movement mechanics.",
    youtubeId: "",
    thumbnail: "",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/lumina",
    itchEmbed: ""
  },
  {
    id: "hose-down",
    title: "Hose Down",
    status: "prototype",
    build: "1.0",
    year: "2025",
    tagline: "Put out forest fires and protect the town.",
    role: "Programmer and Designer",
    tools: ["Unity", "C#"],
    summary: "Hose Down is a simulation game where players work to stop spreading fires and protect a town. The project explores simple problem-solving mechanics and environmental interaction.",
    youtubeId: "",
    thumbnail: "",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/hose-down",
    itchEmbed: ""
  },
  {
    id: "fork-this",
    title: "Fork This!",
    status: "prototype",
    build: "1.0",
    year: "2025",
    tagline: "Complete orders before time runs out.",
    role: "Programmer and Designer",
    tools: ["Unity", "C#"],
    summary: "Fork This! is a fast-paced cooking and management game focused on completing customer orders under pressure.",
    youtubeId: "",
    thumbnail: "",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/fork-this",
    itchEmbed: ""
  },
  {
    id: "critical-roll",
    title: "Critical Roll",
    status: "prototype",
    build: "1.0",
    year: "2022",
    tagline: "Join Hammond H SpellSpeaker on his adventurous D&D campaign.",
    role: "Programmer and Designer",
    tools: ["Unity", "C#"],
    summary: "Critical Roll is a platforming adventure inspired by tabletop role-playing games. Players join Hammond H SpellSpeaker on a magical journey filled with challenges and surprises.",
    youtubeId: "",
    thumbnail: "",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/critical-roll",
    itchEmbed: ""
  },
  {
    id: "trials-of-anubis",
    title: "Trials Of Anubis",
    status: "prototype",
    build: "1.0",
    year: "2021",
    tagline: "Escape the tomb and overcome the Trials of Anubis.",
    role: "Programmer and Designer",
    tools: ["Unity", "C#"],
    summary: "Trials Of Anubis is a platforming adventure where players navigate an ancient tomb and overcome challenges inspired by Egyptian mythology.",
    youtubeId: "",
    thumbnail: "",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/trials-of-anubis",
    itchEmbed: ""
  },
  {
    id: "cubic-defence",
    title: "Cubic Defence",
    status: "prototype",
    build: "1.0",
    year: "2022",
    tagline: "Defend your base by destroying enemy cubes.",
    role: "Programmer and Artist",
    tools: ["Unity", "C#", "Aseprite"],
    summary: "Cubic Defence is a strategy game focused on defending your base from waves of enemies. Created during Ludum Dare 50.",
    youtubeId: "",
    thumbnail: "",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/cubic-defence",
    itchEmbed: ""
  },
  {
    id: "block-rush",
    title: "Block Rush",
    status: "prototype",
    build: "0.1",
    year: "2021",
    tagline: "A 2D platformer prototype focused on movement and challenges.",
    role: "Programmer Designer and Artist",
    tools: ["Unity", "C#", "Aseprite"],
    summary: "Block Rush is a small 2D platforming prototype exploring player movement and level design.",
    youtubeId: "",
    thumbnail: "",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/block-rush",
    itchEmbed: ""
  }
];

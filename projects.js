/*
  PROJECTS DATA
  =============
  This is the only file you need to touch to add, edit, or reorder projects.
  Each entry is one project card + its detail view. Fields:

  id          - unique short slug, no spaces (used internally)
  title       - project name shown on the card and in the detail view
  category    - one of: "personal" | "game-jam"
                Controls which section of the page the project appears in.
  status      - one of: "active" | "prototype" | "concept" | "released" | "game-jam" | "industry"
                active    = currently being worked on
                prototype = playable and feature-complete, not fully polished
                concept   = early-stage, exploratory
                released  = fully playable and released
                game-jam  = released and completed during a game jam
                industry  = built while working in the industry, not currently active there
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
                "Edit game" -> embed options, which gives you an iframe src
                like "https://itch.io/embed-upload/123456?color=..."
                Only works if the game's visibility/embedding is set to
                allow it. Leave as "" to just show the itchUrl link instead.

  competition - optional. Name of the game jam or competition, e.g.
                "GMTK Game Jam 2025". Leave as "" to skip.
  placement   - optional. How you placed, e.g. "Top 10%", "1st place",
                "Rank 42 of 900". Leave as "" to skip. Only shows up if
                both competition and placement are filled in.

  Order in this array = order within its category section, top to bottom /
  left to right. Drop a new object in wherever you want it to appear.
*/

const PROJECTS = [
    {
    id: "nowshowing",
    title: "Now Showing",
    category: "personal",
    status: "active",
    build: "1.3",
    year: "2026",
    tagline: "A new title each day. Guess it one clue at a time.",
    role: "Solo developer",
    tools: ["HTML5", "JavaScript", "CSS", "GitHub Pages"],
    summary: "A Wordle-style daily guessing game where players identify a movie, anime, or game from five emoji clues, revealed one at a time with each wrong guess. Built as a single self-contained web app with three fully independent modes, each with its own curated title pool, deterministic daily rotation, win-streak tracking, and a completely distinct visual identity per category: a torn-paper movie ticket, a halftone manga panel, and a neon CRT arcade cabinet, all sharing one underlying component through CSS custom properties rather than three separate builds.",
    youtubeId: "",
    thumbnail: "images/og-image.png",
    gallery: [],
    itchUrl: "https://james-hicks.github.io/now-showing/",
    itchEmbed: "",
    competition: "",
    placement: ""
  },  
  {
    id: "pokeprice",
    title: "Pok\u00e9Price",
    category: "personal",
    status: "released",
    build: "1.0",
    year: "2026",
    tagline: "Test your knowledge by guessing the value of Pok\u00e9mon cards.",
    role: "Solo developer",
    tools: ["Unity", "C#", "API"],
    summary: "PokePrice is a guessing game where players try to predict the value of Pok\u00e9mon cards. The project explores working with external data and creating a simple but engaging gameplay loop.",
    youtubeId: "",
    thumbnail: "images/pokeprice.png",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/pokeprice",
    itchEmbed: "https://itch.io/embed-upload/13898904?color=0f0f0f",
    competition: "",
    placement: ""
  },
  {
    id: "boomeroo",
    title: "Boomeroo",
    category: "game-jam",
    status: "game-jam",
    build: "1.0",
    year: "2025",
    tagline: "A fast-paced action game created for GMTK Game Jam 2025.",
    role: "Programmer and Designer",
    tools: ["Unity", "C#"],
    summary: "Boomeroo is an action game created during GMTK Game Jam 2025. Built around a simple gameplay idea, the project focuses on creating a fun and replayable experience within a short development timeline.",
    youtubeId: "",
    thumbnail: "images/boomeroo.png",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/boomeroo",
    itchEmbed: "",
    competition: "GMTK Game Jam 2025",
    placement: ""
  },
  {
    id: "lumina",
    title: "Lumina",
    category: "game-jam",
    status: "game-jam",
    build: "1.0",
    year: "2024",
    tagline: "Push through the darkness and find your way forward.",
    role: "Programmer and Designer",
    tools: ["Unity", "C#"],
    summary: "Lumina  is a game about using your potions and Alchemy to light the dark labyrinth and find the source of light at the end! Play as a Hammond P Potion Master, as he must navigate through the calming abyss, with calming ambient music and simple visuals, this game is really easy to relax and enjoy! Submission for Pirate Software Game Jam #15",
    youtubeId: "",
    thumbnail: "images/lumina.png",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/lumina",
    itchEmbed: "",
    competition: "Pirate Software Game Jam #15",
    placement: ""
  },
  {
    id: "hose-down",
    title: "Hose Down",
    category: "game-jam",
    status: "game-jam",
    build: "1.0",
    year: "2024",
    tagline: "Put out forest fires and protect the town.",
    role: "Programmer and Designer",
    tools: ["Unity", "C#"],
    summary: "Hose Down is a game about fighting a spreading fire to protect the town. You must balance fighting the fire, refilling your water pack, and purchasing upgrades to keep the town as safe as possible. The game ends when more than half of the houses in the village burn down. Good luck! ",
    youtubeId: "",
    thumbnail: "images/hose-down.webp",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/hose-down",
    itchEmbed: "",
    competition: "Pirate Software Game Jam #14",
    placement: ""
  },
  {
    id: "fork-this",
    title: "Fork This!",
    category: "game-jam",
    status: "game-jam",
    build: "1.0",
    year: "2023",
    tagline: "Complete orders before time runs out.",
    role: "Programmer and Designer",
    tools: ["Unity", "C#"],
    summary: "Fork This! is a game about delivering packages from the warehouse to their delivery trucks! Play as a Hammond H Forklifter, as he must navigate a stressful first day on the job, but don't miss a delivery, or you might not have a job tomorrow! Submission for Ludum Dare 53 Game Jam from Friday April 28 - Monday May 1st.",
    youtubeId: "",
    thumbnail: "images/forkthis.webp",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/fork-this",
    itchEmbed: "",
    competition: "Ludum Dare 53",
    placement: ""
  },
  {
    id: "matrixworld",
    title: "Matrix World",
    category: "personal",
    status: "industry",
    build: "1.x",
    year: "2023",
    tagline: "3D Open World On Chain",
    role: "Solo developer",
    tools: ["Unity", "C#", "Json", "Mirror", "HLSL"],
    summary: "Worked on the Canadian Development team for Matrix World from 2022 - 2024. Prototyped and Developed new features Worked with and Implemented backend structures and Functions Worked with Mirror to create multiplayer experiences.",
    youtubeId: "https://www.youtube.com/watch?v=4Ht0j6TomuA",
    thumbnail: "images/matrix-world.webp",
    gallery: [],
    itchUrl: "https://matrixworld.org/home",
    itchEmbed: "",
    competition: "",
    placement: ""
  },  
  {
    id: "let-me-rest",
    title: "Let Me Rest",
    category: "personal",
    status: "released",
    build: "1.0",
    year: "2022",
    tagline: "Final Project for the Game Design program at Vancouver Film School",
    role: "Programmer and Designer",
    tools: ["Unity", "C#"],
    summary: "Game Description: Let Me Rest is a 3D third-person puzzle adventure game where you experience the journey of the broken soul of a child who must overcome painful memories from their past, while avoiding harmful light and finding safety in the shadows.",
    youtubeId: "https://www.youtube.com/watch?v=gKUoNfn6avY&t=1s",
    thumbnail: "images/letmerest.webp",
    gallery: [],
    itchUrl: "https://polkoii.itch.io/gd64",
    itchEmbed: "",
    competition: "VFS",
    placement: "Best Final"
  },
  {
    id: "critical-roll",
    title: "Critical Roll",
    category: "game-jam",
    status: "game-jam",
    build: "1.0",
    year: "2022",
    tagline: "Join Hammond H SpellSpeaker on his adventurous D&D campaign.",
    role: "Programmer and Designer",
    tools: ["Unity", "C#"],
    summary: "Critical Roll is a platforming adventure inspired by tabletop role-playing games. Players join Hammond H SpellSpeaker on a magical journey filled with challenges and surprises.",
    youtubeId: "https://www.youtube.com/watch?v=YXMf8BrZ6H8",
    thumbnail: "images/critical",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/critical-roll",
    itchEmbed: "",
    competition: "GMTK Game Jam",
    placement: "53"
  },
  {
    id: "trials-of-anubis",
    title: "Trials Of Anubis",
    category: "personal",
    status: "released",
    build: "1.0",
    year: "2022",
    tagline: "Escape the tomb and overcome the Trials of Anubis.",
    role: "Programmer and Designer",
    tools: ["Unity", "C#"],
    summary: "Trials of Anubis is a 2.5D Puzzle Platformer where you play as Arah, Daughter of Anubis, granted the opportunity to take on the Trials of Anubis. Platform and defeat your enemies by controlling the sand around you. Creating Sand Soldiers to block the path of projectiles, or to help you reach greater heights. Reach the endgame, a final trial vs Anubis as you conclude the Trials of Anubis. Team Project for the Game Design program at Vancouver Film School. Made on a Team of 4 People, over a 2 month production time.",
    youtubeId: "https://www.youtube.com/watch?v=NAMZBzhHiWE",
    thumbnail: "images/trialsanubis.webp",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/trials-of-anubis",
    itchEmbed: "",
    competition: "VFS",
    placement: "Best Midterm"
  },
  {
    id: "cubic-defence",
    title: "Cubic Defence",
    category: "game-jam",
    status: "game-jam",
    build: "1.0",
    year: "2022",
    tagline: "Defend your base by destroying enemy cubes.",
    role: "Programmer and Artist",
    tools: ["Unity", "C#", "Aseprite"],
    summary: "Cubic Defence is a strategy game focused on defending your base from waves of enemies. Created during Ludum Dare 50.",
    youtubeId: "",
    thumbnail: "images/cubicdefence.webp",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/cubic-defence",
    itchEmbed: "",
    competition: "Ludum Dare 50",
    placement: ""
  },
  {
    id: "block-rush",
    title: "Block Rush",
    category: "personal",
    status: "prototype",
    build: "0.1",
    year: "2021",
    tagline: "A 2D platformer prototype focused on movement and challenges.",
    role: "Programmer, Designer, and Artist",
    tools: ["Unity", "C#", "Aseprite"],
    summary: "Block Rush is a small 2D platforming prototype exploring player movement and level design.",
    youtubeId: "",
    thumbnail: "images/blockrush.png",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/block-rush",
    itchEmbed: "",
    competition: "",
    placement: ""
  },
  {
    id: "nekonova",
    title: "Nekonova's Not Home",
    category: "game-jam",
    status: "game-jam",
    build: "1.0",
    year: "2021",
    tagline: "Submission for the Ludum Dare 49 Competition, the theme was Unstable.",
    role: "Programmer",
    tools: ["Unity", "C#"],
    summary: "You emerge from a supernova formed in the center of this strange new universe… The Black hole formed by the Supernova is starting to rip and tear this universe to shreds! Jump from geometry to geometry in order to survive as long as possible before inevitably being sucked back into the black hole! Act fast, but make sure not to collide with any unstable red shapes. Aim for the stable blue shapes! Made on a Team of 6 People, over a 48 hour production time.",
    youtubeId: "",
    thumbnail: "images/nekonova.webp",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/nekonovas-not-home",
    itchEmbed: "",
    competition: "Ludum Dare 49",
    placement: ""
  },
  {
    id: "deepest-fish",
    title: "The Deepest Fish",
    category: "game-jam",
    status: "game-jam",
    build: "1.0",
    year: "2020",
    tagline: "Submission for the Ludum Dare 48 Competition, the theme was Deeper and Deeper.",
    role: "Programmer & Artist",
    tools: ["Unity", "C#", "Aseprite"],
    summary: "Hone your fishing skills and hunt for the deepest fish! Travel to exotic locations as you catch new and more challenging fish. You play as Trevor, a lone fisherman who doesn't have a lot of money... yet. Trevor only has his trusty fishing rod, a radio and the clothes on his back. Begin in the cold rainy rivers before embarking on your exhilarating  journey to earn money, and to find the deepest fish. Made on a Team of 3 People, over a 48 month production time.",
    youtubeId: "",
    thumbnail: "images/deepestfish.webp",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/thedeepestfish",
    itchEmbed: "",
    competition: "Ludum Dare 48",
    placement: ""
  },
  {
    id: "watered-down-waste",
    title: "Watered Down Waste",
    category: "game-jam",
    status: "game-jam",
    build: "1.0",
    year: "2020",
    tagline: "Submission for the MLH Hackit Shipit Hackathon the theme was The Ocean.",
    role: "Programmer & Artist",
    tools: ["Unity", "C#", "Aseprite"],
    summary: "This Game was made as part of a 48 hour hackathon. The theme was to create something nautical themed. Our team decided to make a game about the environment, we realized that it was the most pressing matter regarding ocean life, and decided to make a game to raise awareness about pollution in the ocean. All sprites, music and code was produced during the 48 hour window from Friday July 17th at 10:00 AM to Sunday July 19th at 10:00 AM. Made on a Team of 3 People, over a 48 hour production time.",
    youtubeId: "https://www.youtube.com/watch?v=lOiieZVnPxA",
    thumbnail: "images/watereddownwaste.webp",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/watered-down-waste",
    itchEmbed: "",
    competition: "MLH Hackit Shipit Hackathon",
    placement: "2nd Place"
  },
  {
    id: "cooking-showdown",
    title: "Cooking Showdown",
    category: "game-jam",
    status: "game-jam",
    build: "1.0",
    year: "2019",
    tagline: "Submission for the Mississauga Hacks Coding Competition the theme was things to do during COVID.",
    role: "Programmer & Artist",
    tools: ["Unity", "C#", "Aseprite"],
    summary: "This game was made as part of the peel coding competition in 2 days. The theme was Making life easier during social distancing. We decided to make a game about cooking! During social distancing its important to find was to entertain yourself. This game allows you to experience competition in cooking in a kitchen with your friends! Try new recipes and become the greatest chef! Made on a Team of 4 People, over a 24 hour production time.",
    youtubeId: "",
    thumbnail: "images/cookingshowdown.webp",
    gallery: [],
    itchUrl: "https://leyamez.itch.io/cooking-showdown",
    itchEmbed: "",
    competition: "Mississauga Hacks",
    placement: "1st Place"
  },
];

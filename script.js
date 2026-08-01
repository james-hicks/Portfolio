const STATUS_LABEL = {
  active: "active dev",
  prototype: "prototype",
  concept: "concept",
  released: "released",
  "game-jam": "game jam",
  industry: "industry"
};

function extractYoutubeId(input) {
  if (!input) return "";
  const trimmed = input.trim();
  if (/^[a-zA-Z0-9_-]{6,20}$/.test(trimmed)) return trimmed;
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/
  ];
  for (const p of patterns) {
    const m = trimmed.match(p);
    if (m) return m[1];
  }
  return trimmed;
}

function renderCard(project) {
  const thumb = project.thumbnail
    ? `<img src="${project.thumbnail}" alt="${project.title} screenshot" loading="lazy">`
    : `<span>no thumbnail yet</span>`;

  const tools = project.tools
    .map(t => `<span class="tool-tag">${t}</span>`)
    .join("");

  const placement = (project.competition && project.placement)
    ? `<div class="placement-badge">
         <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"></path><path d="M17 5h2a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3M7 5H5a2 2 0 0 0-2 2v1a3 3 0 0 0 3 3"></path></svg>
         ${project.placement}, ${project.competition}
       </div>`
    : "";

  const card = document.createElement("button");
  card.className = "project-card";
  card.setAttribute("type", "button");
  card.setAttribute("aria-haspopup", "dialog");
  card.innerHTML = `
    <div class="card-thumb">
      <span class="status-badge status-badge-thumb status-${project.status}">${STATUS_LABEL[project.status]}</span>
      ${thumb}
    </div>
    <div class="card-body">
      <div class="card-top-row">
        <h3 class="card-title">${project.title}</h3>
      </div>
      <p class="card-tagline">${project.tagline}</p>
      ${placement}
      <div class="card-tools">${tools}</div>
    </div>
  `;
  card.addEventListener("click", () => openModal(project));
  return card;
}

function renderGridInto(elementId, projects) {
  const grid = document.getElementById(elementId);
  if (!grid) return;
  grid.innerHTML = "";
  projects.forEach(project => grid.appendChild(renderCard(project)));
}

function renderProjectGrids() {
  const personal = PROJECTS.filter(p => p.category === "personal");
  const jam = PROJECTS.filter(p => p.category === "game-jam");
  renderGridInto("project-grid-personal", personal);
  renderGridInto("project-grid-jam", jam);
  const countPersonal = document.getElementById("count-personal");
  const countJam = document.getElementById("count-jam");
  if (countPersonal) countPersonal.textContent = `(${personal.length})`;
  if (countJam) countJam.textContent = `(${jam.length})`;
}

function setupProjectTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const band = document.getElementById("project-band");
  const panels = {
    personal: document.getElementById("project-grid-personal"),
    "game-jam": document.getElementById("project-grid-jam")
  };
  if (!tabs.length || !band) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.category;
      tabs.forEach(t => {
        const isActive = t === tab;
        t.classList.toggle("active", isActive);
        t.setAttribute("aria-selected", isActive ? "true" : "false");
      });
      Object.entries(panels).forEach(([key, panel]) => {
        if (panel) panel.hidden = key !== category;
      });
      band.classList.toggle("band-personal", category === "personal");
      band.classList.toggle("band-jam", category === "game-jam");
    });
  });
}

function openModal(project) {
  const backdrop = document.getElementById("modal-backdrop");
  const content = document.getElementById("modal-content");

  const ytId = extractYoutubeId(project.youtubeId);
  const video = ytId
    ? `<div class="modal-video"><iframe src="https://www.youtube.com/embed/${ytId}" title="${project.title} demo video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    : `<div class="modal-video"><div class="modal-video-placeholder">no video linked yet</div></div>`;

  const gallery = project.gallery.length
    ? `<div class="modal-gallery">${project.gallery.map(src => `<img src="${src}" alt="${project.title} screenshot" loading="lazy">`).join("")}</div>`
    : `<p class="modal-gallery-placeholder">no screenshots added yet</p>`;

  const tools = project.tools.map(t => `<span class="tool-tag">${t}</span>`).join("");

  const placementRow = (project.competition && project.placement)
    ? `<div>
         <p class="modal-section-label" style="margin-top:0;">result</p>
         <p class="modal-summary" style="margin:0;">${project.placement}, ${project.competition}</p>
       </div>`
    : "";

  let play = "";
  if (project.itchEmbed) {
    play = `<div class="modal-play-embed"><iframe src="${project.itchEmbed}" title="Play ${project.title} on itch.io" allowfullscreen></iframe></div>`;
  } else if (project.itchUrl) {
    play = `<a class="play-link" href="${project.itchUrl}" target="_blank" rel="noopener">Check it out here &rarr;</a>`;
  }

  content.innerHTML = `
    <div class="modal-header-row">
      <span class="status-badge status-${project.status}">${STATUS_LABEL[project.status]}</span>
    </div>
    <h2 class="modal-title" id="modal-title">${project.title}</h2>
    <p class="modal-tagline">${project.tagline}</p>
    ${play}

    ${video}

    <p class="modal-section-label">summary</p>
    <p class="modal-summary">${project.summary}</p>

    <div class="modal-meta-row">
      <div>
        <p class="modal-section-label" style="margin-top:0;">role</p>
        <p class="modal-summary" style="margin:0;">${project.role}</p>
      </div>
      <div>
        <p class="modal-section-label" style="margin-top:0;">year</p>
        <p class="modal-summary" style="margin:0;">${project.year}</p>
      </div>
      <div>
        <p class="modal-section-label" style="margin-top:0;">tools</p>
        <div class="card-tools">${tools}</div>
      </div>
      ${placementRow}
    </div>

    <p class="modal-section-label">screenshots</p>
    ${gallery}
  `;

  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close").focus();
}

function closeModal() {
  document.getElementById("modal-backdrop").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-backdrop").addEventListener("click", e => {
  if (e.target.id === "modal-backdrop") closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

renderProjectGrids();
setupProjectTabs();

(function setupBackgroundParallax() {
  const blobs = document.querySelectorAll(".blob");
  if (!blobs.length) return;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const strengths = [16, -20, 24];
  window.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    blobs.forEach((blob, i) => {
      const s = strengths[i % strengths.length];
      blob.style.transform = `translate(${(x * s).toFixed(1)}px, ${(y * s).toFixed(1)}px)`;
    });
  });
})();

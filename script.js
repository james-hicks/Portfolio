const STATUS_LABEL = {
  active: "active dev",
  prototype: "prototype",
  concept: "concept",
  released: "released",
  "game-jam": "game jam",
  industry: "industry"
};

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
      <span class="card-build">build ${project.build}</span>
      ${thumb}
    </div>
    <div class="card-body">
      <div class="card-top-row">
        <h3 class="card-title">${project.title}</h3>
        <span class="status-badge status-${project.status}">${STATUS_LABEL[project.status]}</span>
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
}

function openModal(project) {
  const backdrop = document.getElementById("modal-backdrop");
  const content = document.getElementById("modal-content");

  const video = project.youtubeId
    ? `<div class="modal-video"><iframe src="https://www.youtube.com/embed/${project.youtubeId}" title="${project.title} demo video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
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
    play = `<a class="play-link" href="${project.itchUrl}" target="_blank" rel="noopener">Play on itch.io &rarr;</a>`;
  }

  content.innerHTML = `
    <div class="modal-header-row">
      <span class="card-build" style="position:static;">build ${project.build}</span>
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

const STATUS_LABEL = {
  active: "active dev",
  prototype: "prototype",
  concept: "concept"
};

function renderCard(project) {
  const thumb = project.thumbnail
    ? `<img src="${project.thumbnail}" alt="${project.title} screenshot" loading="lazy">`
    : `<span>no thumbnail yet</span>`;

  const tools = project.tools
    .map(t => `<span class="tool-tag">${t}</span>`)
    .join("");

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
      <div class="card-tools">${tools}</div>
    </div>
  `;
  card.addEventListener("click", () => openModal(project));
  return card;
}

function renderProjectGrid() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = "";
  PROJECTS.forEach(project => grid.appendChild(renderCard(project)));
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

renderProjectGrid();

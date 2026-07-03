const STORAGE_KEY = "daddys-website-projects";

const form = document.querySelector("#projectForm");
const list = document.querySelector("#projectList");
const clearButton = document.querySelector("#clearProjects");

function getProjects() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    console.warn("Could not load saved projects.", error);
    return [];
  }
}

function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function renderProjects() {
  if (!list) {
    return;
  }

  const projects = getProjects();

  if (!projects.length) {
    list.innerHTML = '<div class="empty-state">No missions saved yet. Add the next thing to build.</div>';
    return;
  }

  list.innerHTML = projects
    .map((project) => {
      return `
        <article class="project-item">
          <strong>${escapeHtml(project.name)}</strong>
          <span class="project-meta">${escapeHtml(project.type)} · Saved ${escapeHtml(project.date)}</span>
          <span>Next action: ${escapeHtml(project.action)}</span>
        </article>
      `;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const project = {
      name: formData.get("projectName").trim(),
      type: formData.get("projectType"),
      action: formData.get("projectAction").trim(),
      date: new Date().toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    if (!project.name || !project.action) {
      return;
    }

    const projects = [project, ...getProjects()];
    saveProjects(projects);
    form.reset();
    renderProjects();
  });
}

if (clearButton) {
  clearButton.addEventListener("click", () => {
    const projects = getProjects();

    if (!projects.length) {
      return;
    }

    const confirmed = window.confirm("Clear all saved missions from this browser?");

    if (confirmed) {
      saveProjects([]);
      renderProjects();
    }
  });
}

renderProjects();

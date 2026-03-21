// ── File Upload Interactions ──

const uploadZone = document.getElementById("uploadZone");
const fileInput = document.getElementById("resumes");
const fileList = document.getElementById("fileList");

const EXT_ICONS = {
  pdf: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M4 7h6M4 4.5h4M4 9.5h3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  docx: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M4 5h6M4 7.5h6M4 10h4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  txt: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M4 5h6M4 7.5h5M4 10h3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
};

function renderFiles(files) {
  fileList.innerHTML = "";
  if (!files.length) return;

  Array.from(files).forEach((file) => {
    const ext = file.name.split(".").pop().toLowerCase();
    const icon = EXT_ICONS[ext] || EXT_ICONS["txt"];

    const item = document.createElement("div");
    item.className = "file-item";
    item.innerHTML = `
      <span class="file-item-icon">${icon}</span>
      <span class="file-item-name">${file.name}</span>
      <span class="file-item-type">${ext}</span>
    `;
    fileList.appendChild(item);
  });

  // Collapse upload-content when files selected
  const uploadContent = uploadZone.querySelector(".upload-content");
  uploadContent.style.padding = "16px 24px";
}

fileInput.addEventListener("change", () => {
  renderFiles(fileInput.files);
});

// Drag and Drop
uploadZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadZone.classList.add("dragging");
});
uploadZone.addEventListener("dragleave", () => {
  uploadZone.classList.remove("dragging");
});
uploadZone.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadZone.classList.remove("dragging");
  const dt = e.dataTransfer;
  if (dt.files.length) {
    fileInput.files = dt.files;
    renderFiles(dt.files);
  }
});

// ── Animate score bars on load ──
window.addEventListener("load", () => {
  const fills = document.querySelectorAll(".score-fill");
  fills.forEach((fill, i) => {
    const target = fill.style.width;
    fill.style.width = "0";
    setTimeout(
      () => {
        fill.style.width = target;
      },
      200 + i * 80,
    );
  });
});

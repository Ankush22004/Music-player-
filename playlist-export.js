// playlist-export.js

function exportLibrary() {
  const data = JSON.stringify(musicLibrary);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "playlist.json";
  link.click();
}

function importLibrary(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const importedData = JSON.parse(e.target.result);
    musicLibrary = importedData;
    localStorage.setItem("musicLibrary", JSON.stringify(musicLibrary));
    renderSongs();
  };
  reader.readAsText(file);
}

const exportBtn = document.createElement("button");
exportBtn.textContent = "📤 Export Playlist";
exportBtn.className = "export-btn";
exportBtn.onclick = exportLibrary;

const importInput = document.createElement("input");
importInput.type = "file";
importInput.accept = ".json";
importInput.className = "import-btn";
importInput.onchange = importLibrary;

document.querySelector(".upload-section").appendChild(exportBtn);
document.querySelector(".upload-section").appendChild(importInput);

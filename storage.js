// storage.js

function calculateStorageSize() {
  let totalBytes = 0;
  for (let category in musicLibrary) {
    musicLibrary[category].forEach(song => {
      if (song.url.startsWith("blob:")) {
        // Approx size is unknown, just count entries
        totalBytes += 3 * 1024 * 1024; // estimate 3MB per song
      }
    });
  }
  const sizeMB = (totalBytes / (1024 * 1024)).toFixed(2);
  alert(`Approximate storage used: ${sizeMB} MB`);
}

const storageBtn = document.createElement("button");
storageBtn.textContent = "💾 Check Storage";
storageBtn.className = "storage-btn";
document.querySelector(".upload-section").appendChild(storageBtn);

storageBtn.onclick = calculateStorageSize;

// download.js

function renderSongsWithDownload() {
  musicList.innerHTML = "";
  for (let category in musicLibrary) {
    if (musicLibrary[category].length > 0) {
      const title = document.createElement("h2");
      title.className = "category-title";
      title.textContent = category.toUpperCase();
      musicList.appendChild(title);

      musicLibrary[category].forEach((song, index) => {
        const item = document.createElement("div");
        item.className = "song-item";

        const span = document.createElement("span");
        span.textContent = song.name;
        span.onclick = () => {
          audioPlayer.src = song.url;
          audioPlayer.play();
        };

        const downloadBtn = document.createElement("a");
        downloadBtn.href = song.url;
        downloadBtn.download = song.name;
        downloadBtn.textContent = "⬇️";
        downloadBtn.className = "download-btn";

        item.appendChild(span);
        item.appendChild(downloadBtn);
        musicList.appendChild(item);
      });
    }
  }
}

renderSongs = renderSongsWithDownload;
renderSongs();

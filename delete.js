// delete.js
function renderSongsWithDelete() {
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
        item.textContent = song.name;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = (e) => {
          e.stopPropagation();
          musicLibrary[category].splice(index, 1);
          localStorage.setItem("musicLibrary", JSON.stringify(musicLibrary));
          renderSongsWithDelete();
        };

        item.onclick = () => {
          audioPlayer.src = song.url;
          audioPlayer.play();
        };

        item.appendChild(deleteBtn);
        musicList.appendChild(item);
      });
    }
  }
}
renderSongs = renderSongsWithDelete;
renderSongs();

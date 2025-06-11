// controls.js

let currentSong = null;
let currentCategory = null;
let currentIndex = -1;

function playSongByIndex(category, index) {
  currentCategory = category;
  currentIndex = index;
  currentSong = musicLibrary[category][index];
  if (currentSong) {
    audioPlayer.src = currentSong.url;
    audioPlayer.play();
  }
}

function addControls() {
  const controls = document.createElement("div");
  controls.className = "controls";

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "⏮️";
  prevBtn.onclick = () => {
    if (currentIndex > 0) {
      playSongByIndex(currentCategory, currentIndex - 1);
    }
  };

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "⏭️";
  nextBtn.onclick = () => {
    if (
      currentCategory &&
      currentIndex < musicLibrary[currentCategory].length - 1
    ) {
      playSongByIndex(currentCategory, currentIndex + 1);
    }
  };

  controls.appendChild(prevBtn);
  controls.appendChild(nextBtn);
  audioPlayer.after(controls);
}

function renderSongsWithControls() {
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

        item.onclick = () => playSongByIndex(category, index);
        musicList.appendChild(item);
      });
    }
  }
}

renderSongs = renderSongsWithControls;
renderSongs();
addControls();

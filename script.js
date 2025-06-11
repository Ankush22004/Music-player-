const fileInput = document.getElementById("fileInput");
const categorySelect = document.getElementById("categorySelect");
const musicList = document.getElementById("musicList");
const audioPlayer = document.getElementById("audioPlayer");

let musicLibrary = JSON.parse(localStorage.getItem("musicLibrary")) || {
  bhajan: [],
  song: [],
  instrumental: []
};

function addSongs() {
  const files = fileInput.files;
  const category = categorySelect.value;

  for (let file of files) {
    const url = URL.createObjectURL(file);
    const song = { name: file.name, url: url };
    musicLibrary[category].push(song);
  }

  localStorage.setItem("musicLibrary", JSON.stringify(musicLibrary));
  renderSongs();
}

function renderSongs() {
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
        item.onclick = () => {
          audioPlayer.src = song.url;
          audioPlayer.play();
        };
        musicList.appendChild(item);
      });
    }
  }
}

renderSongs();

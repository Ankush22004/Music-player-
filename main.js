const fileInput = document.getElementById("fileInput");
const categorySelect = document.getElementById("categorySelect");
const categoriesDiv = document.getElementById("categories");
const audioPlayer = document.getElementById("audioPlayer");

let songsData = JSON.parse(localStorage.getItem("songsData")) || {
  bhajan: [],
  song: [],
  instrumental: []
};

function addSongs() {
  const files = fileInput.files;
  const category = categorySelect.value;
  for (let file of files) {
    const url = URL.createObjectURL(file);
    songsData[category].push({ name: file.name, url });
  }
  localStorage.setItem("songsData", JSON.stringify(songsData));
  renderSongs();
}

function playSong(url) {
  audioPlayer.src = url;
  audioPlayer.play();
}

function renderSongs() {
  categoriesDiv.innerHTML = "";
  for (let category in songsData) {
    const div = document.createElement("div");
    div.className = "category";
    div.innerHTML = `<h2>${category.toUpperCase()}</h2>`;
    songsData[category].forEach((song, index) => {
      const item = document.createElement("div");
      item.className = "song-item";
      item.textContent = song.name;
      item.onclick = () => playSong(song.url);
      div.appendChild(item);
    });
    categoriesDiv.appendChild(div);
  }
}

renderSongs();

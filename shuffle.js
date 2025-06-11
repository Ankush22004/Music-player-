// shuffle.js

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleSongs(category) {
  shuffleArray(musicLibrary[category]);
  localStorage.setItem("musicLibrary", JSON.stringify(musicLibrary));
  renderSongs();
}

const shuffleBtn = document.createElement("button");
shuffleBtn.textContent = "🔀 Shuffle";
shuffleBtn.className = "shuffle-btn";

shuffleBtn.onclick = () => {
  const category = categorySelect.value;
  shuffleSongs(category);
};

document.querySelector(".upload-section").appendChild(shuffleBtn);

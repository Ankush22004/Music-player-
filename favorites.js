// favorites.js

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function toggleFavorite(song) {
  const index = favorites.findIndex((s) => s.name === song.name);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(song);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderFavorites();
}

function renderFavorites() {
  let favContainer = document.getElementById("favoriteContainer");
  if (!favContainer) {
    favContainer = document.createElement("div");
    favContainer.id = "favoriteContainer";
    favContainer.innerHTML = "<h3>❤️ Favorites</h3>";
    document.body.appendChild(favContainer);
  }

  favContainer.innerHTML = "<h3>❤️ Favorites</h3>";
  favorites.forEach((song) => {
    const div = document.createElement("div");
    div.className = "song-item";
    div.textContent = song.name;
    div.onclick = () => {
      audioPlayer.src = song.url;
      audioPlayer.play();
    };
    favContainer.appendChild(div);
  });
}

// Update renderSongs to include favorite button
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("song-item")) {
      const name = e.target.textContent;
      for (let category in musicLibrary) {
        const song = musicLibrary[category].find((s) => s.name === name);
        if (song) toggleFavorite(song);
      }
    }
  });
});

renderFavorites();

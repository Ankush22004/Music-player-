// suggest.js

const suggestionBox = document.createElement("div");
suggestionBox.id = "suggestionBox";
suggestionBox.innerHTML = "<h3>🎯 Suggested Songs</h3>";
document.body.appendChild(suggestionBox);

function suggestSongs() {
  let allSongs = [];
  for (let category in musicLibrary) {
    allSongs = allSongs.concat(musicLibrary[category]);
  }
  const random = allSongs.sort(() => 0.5 - Math.random()).slice(0, 3);
  suggestionBox.innerHTML = "<h3>🎯 Suggested Songs</h3>";
  random.forEach((song) => {
    const div = document.createElement("div");
    div.className = "song-item";
    div.textContent = song.name;
    div.onclick = () => {
      audioPlayer.src = song.url;
      audioPlayer.play();
    };
    suggestionBox.appendChild(div);
  });
}

setTimeout(suggestSongs, 3000);

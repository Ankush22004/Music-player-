// playlist.js

let queue = [];

function addToQueue(song) {
  queue.push(song);
  updateQueueUI();
}

function playNextInQueue() {
  if (queue.length > 0) {
    const nextSong = queue.shift();
    audioPlayer.src = nextSong.url;
    audioPlayer.play();
    updateQueueUI();
  }
}

function updateQueueUI() {
  let queueContainer = document.getElementById("queueContainer");
  if (!queueContainer) {
    queueContainer = document.createElement("div");
    queueContainer.id = "queueContainer";
    queueContainer.innerHTML = "<h3>🎵 Playlist Queue</h3>";
    document.body.appendChild(queueContainer);
  }

  queueContainer.innerHTML = "<h3>🎵 Playlist Queue</h3>";

  queue.forEach((song, index) => {
    const div = document.createElement("div");
    div.className = "song-item";
    div.textContent = song.name;
    queueContainer.appendChild(div);
  });
}

audioPlayer.addEventListener("ended", playNextInQueue);

// Modify song click in renderSongs if needed:
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("song-item") && e.target.textContent) {
    const name = e.target.textContent;
    for (let category in musicLibrary) {
      const song = musicLibrary[category].find((s) => s.name === name);
      if (song) {
        addToQueue(song);
        break;
      }
    }
  }
});

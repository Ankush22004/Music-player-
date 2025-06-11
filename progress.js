// progress.js

const progressBar = document.createElement("input");
progressBar.type = "range";
progressBar.min = 0;
progressBar.max = 100;
progressBar.value = 0;
progressBar.className = "progress-bar";
audioPlayer.after(progressBar);

// Sync progress bar with audio
audioPlayer.addEventListener("timeupdate", () => {
  if (audioPlayer.duration) {
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  }
});

// Seek when user changes range
progressBar.addEventListener("input", () => {
  if (audioPlayer.duration) {
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
  }
});

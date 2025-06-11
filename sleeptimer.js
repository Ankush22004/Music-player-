// sleeptimer.js

let sleepTimeout;

function setSleepTimer() {
  const minutes = prompt("Stop playback after how many minutes?");
  if (minutes && !isNaN(minutes)) {
    if (sleepTimeout) clearTimeout(sleepTimeout);
    sleepTimeout = setTimeout(() => {
      audioPlayer.pause();
      alert("🛌 Sleep Timer: Music stopped");
    }, parseInt(minutes) * 60000);
  }
}

const sleepBtn = document.createElement("button");
sleepBtn.textContent = "⏱️ Sleep Timer";
sleepBtn.className = "sleep-btn";
sleepBtn.onclick = setSleepTimer;
document.querySelector(".upload-section").appendChild(sleepBtn);

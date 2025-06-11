// repeat.js

let isRepeat = false;

const repeatBtn = document.createElement("button");
repeatBtn.textContent = "🔁 Repeat: OFF";
repeatBtn.className = "repeat-btn";

repeatBtn.onclick = () => {
  isRepeat = !isRepeat;
  audioPlayer.loop = isRepeat;
  repeatBtn.textContent = isRepeat ? "🔁 Repeat: ON" : "🔁 Repeat: OFF";
};

audioPlayer.after(repeatBtn);

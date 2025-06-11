// analytics.js

let playCount = parseInt(localStorage.getItem("playCount") || "0");
let totalPlayTime = parseInt(localStorage.getItem("playTime") || "0");
let startTime = 0;

audioPlayer.addEventListener("play", () => {
  playCount++;
  localStorage.setItem("playCount", playCount);
  startTime = Date.now();
});

audioPlayer.addEventListener("pause", () => {
  const played = Date.now() - startTime;
  totalPlayTime += Math.floor(played / 1000);
  localStorage.setItem("playTime", totalPlayTime);
});

const analyticsBtn = document.createElement("button");
analyticsBtn.textContent = "📊 View Analytics";
analyticsBtn.className = "analytics-btn";
analyticsBtn.onclick = () => {
  alert(`Songs Played: ${playCount}\nTotal Time: ${Math.floor(totalPlayTime / 60)} mins`);
};
document.querySelector(".upload-section").appendChild(analyticsBtn);

// stream.js

const streamBtn = document.createElement("button");
streamBtn.textContent = "📡 Stream Online Radio";
streamBtn.className = "stream-btn";
streamBtn.onclick = () => {
  audioPlayer.src = "https://stream-url.com/your-stream.mp3"; // replace with actual stream
  audioPlayer.play();
};
document.querySelector(".upload-section").appendChild(streamBtn);

// recorder.js

let mediaRecorder;
let recordedChunks = [];

const recordBtn = document.createElement("button");
recordBtn.textContent = "🎤 Record";
recordBtn.className = "record-btn";

recordBtn.onclick = async () => {
  if (!mediaRecorder || mediaRecorder.state === "inactive") {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    recordedChunks = [];

    mediaRecorder.ondataavailable = (e) => recordedChunks.push(e.data);
    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      const name = prompt("Enter recording name:");
      const song = { name: name || "Voice Note", url: url };
      musicLibrary["song"].push(song);
      localStorage.setItem("musicLibrary", JSON.stringify(musicLibrary));
      renderSongs();
    };

    mediaRecorder.start();
    recordBtn.textContent = "⏹️ Stop Recording";
  } else {
    mediaRecorder.stop();
    recordBtn.textContent = "🎤 Record";
  }
};

document.querySelector(".upload-section").appendChild(recordBtn);

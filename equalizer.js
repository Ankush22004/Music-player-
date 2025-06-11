// equalizer.js

const canvas = document.createElement("canvas");
canvas.id = "equalizerCanvas";
canvas.height = 60;
canvas.style.width = "100%";
document.body.insertBefore(canvas, document.querySelector(".container"));

const ctx = canvas.getContext("2d");
const barWidth = 10;
let audioContext, analyser, source, dataArray;

audioPlayer.addEventListener("play", () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    source = audioContext.createMediaElementSource(audioPlayer);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 64;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    drawEqualizer();
  }
});

function drawEqualizer() {
  requestAnimationFrame(drawEqualizer);
  analyser.getByteFrequencyData(dataArray);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < dataArray.length; i++) {
    const barHeight = dataArray[i] / 2;
    ctx.fillStyle = `rgb(${barHeight + 100},${255 - barHeight},100)`;
    ctx.fillRect(i * barWidth, canvas.height - barHeight, barWidth - 2, barHeight);
  }
}

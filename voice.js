// voice.js

try {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const command = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    console.log("Voice Command:", command);

    if (command.includes("play")) audioPlayer.play();
    else if (command.includes("pause")) audioPlayer.pause();
    else if (command.includes("stop")) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    } else if (command.includes("next")) {
      if (typeof currentIndex !== "undefined" && currentCategory) {
        if (currentIndex < musicLibrary[currentCategory].length - 1) {
          playSongByIndex(currentCategory, currentIndex + 1);
        }
      }
    }
  };

  recognition.start();
} catch (e) {
  alert("Voice control not supported on this browser.");
}

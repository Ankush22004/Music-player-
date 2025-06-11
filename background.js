// background.js

// Browser automatically handles background playback for <audio> if page is active
// But to ensure uninterrupted playback, we handle `visibilitychange`
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    // Page is hidden, keep audio playing
    if (!audioPlayer.paused) {
      audioPlayer.play().catch(() => {}); // Auto-play might be blocked
    }
  }
});

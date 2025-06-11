// notify.js

if ("Notification" in window && Notification.permission !== "granted") {
  Notification.requestPermission();
}

audioPlayer.addEventListener("play", () => {
  if (Notification.permission === "granted") {
    const songName = audioPlayer.src.split("/").pop().slice(0, 30);
    new Notification("Now Playing 🎶", {
      body: songName,
      icon: "icon.png"
    });
  }
});

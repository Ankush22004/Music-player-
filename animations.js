// animations.js

document.addEventListener("DOMContentLoaded", () => {
  const songItems = document.querySelectorAll(".song-item");
  songItems.forEach((item, i) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(10px)";
    setTimeout(() => {
      item.style.transition = "all 0.3s ease";
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, i * 50);
  });
});

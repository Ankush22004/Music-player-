// backgrounds.js

const backgroundList = [
  "linear-gradient(135deg, #1a1a1a, #000000)",
  "linear-gradient(135deg, #3e1f47, #1f4037)",
  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
];

let bgIndex = 0;

function changeBackground() {
  document.body.style.background = backgroundList[bgIndex];
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundSize = "cover";
  bgIndex = (bgIndex + 1) % backgroundList.length;
}

setInterval(changeBackground, 10000); // Change every 10 seconds
changeBackground();

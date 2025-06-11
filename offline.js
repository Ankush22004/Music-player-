// offline.js

window.addEventListener("offline", () => {
  alert("⚠️ You are now offline. Playing local files only.");
});

window.addEventListener("online", () => {
  alert("✅ You are back online!");
});

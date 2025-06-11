// search.js
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search songs...";
searchInput.className = "search-bar";
musicList.before(searchInput);

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const songItems = document.querySelectorAll(".song-item");
  songItems.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(query)
      ? "block"
      : "none";
  });
});

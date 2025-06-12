// upload-indexeddb.js

let db;

function initDB() {
  const request = indexedDB.open("BharatVerseDB", 1);

  request.onerror = function () {
    console.error("❌ IndexedDB error.");
  };

  request.onsuccess = function (event) {
    db = event.target.result;
    loadIndexedDBSongs();
  };

  request.onupgradeneeded = function (event) {
    db = event.target.result;
    db.createObjectStore("songs", { keyPath: "id", autoIncrement: true });
  };
}

function addSongsToIndexedDB() {
  const files = fileInput.files;
  const category = categorySelect.value;

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const transaction = db.transaction(["songs"], "readwrite");
      const store = transaction.objectStore("songs");

      const song = {
        name: file.name,
        category: category,
        data: e.target.result // base64
      };

      store.add(song);
    };
    reader.readAsDataURL(file);
  });

  setTimeout(loadIndexedDBSongs, 500); // Re-render after store
}

function loadIndexedDBSongs() {
  const transaction = db.transaction(["songs"], "readonly");
  const store = transaction.objectStore("songs");

  const request = store.getAll();

  request.onsuccess = function (e) {
    const results = e.target.result;

    musicLibrary = { bhajan: [], song: [], instrumental: [] };

    results.forEach(item => {
      const song = { name: item.name, url: item.data };
      musicLibrary[item.category].push(song);
    });

    localStorage.setItem("musicLibrary", JSON.stringify(musicLibrary));
    renderSongs();
  };
}

window.addEventListener("DOMContentLoaded", initDB);

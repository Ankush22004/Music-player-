// upload-base64.js

function addSongs() {
  const files = fileInput.files;
  const category = categorySelect.value;

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const song = {
        name: file.name,
        url: e.target.result  // base64 audio
      };
      musicLibrary[category].push(song);
      localStorage.setItem("musicLibrary", JSON.stringify(musicLibrary));
      renderSongs(); // Refresh song list
    };
    reader.readAsDataURL(file); // base64 encode
  });
}

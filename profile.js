// profile.js

let username = localStorage.getItem("bvUsername");

if (!username) {
  username = prompt("Enter your name:");
  if (username) {
    localStorage.setItem("bvUsername", username);
  }
}

if (username) {
  const greet = document.createElement("div");
  greet.textContent = `👋 Welcome, ${username}`;
  greet.className = "welcome-banner";
  document.querySelector(".container").prepend(greet);
}

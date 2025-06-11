// lock.js

const password = "bharatverse"; // change this to secure

if (!sessionStorage.getItem("authenticated")) {
  const userInput = prompt("Enter password to access music player:");
  if (userInput !== password) {
    document.body.innerHTML = "<h2 style='color:white;text-align:center;margin-top:20%'>🔒 Access Denied</h2>";
    throw new Error("Unauthorized");
  } else {
    sessionStorage.setItem("authenticated", "true");
  }
}

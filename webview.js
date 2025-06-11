// webview.js

if (navigator.userAgent.includes("Android") && window.AndroidInterface) {
  // Communicate with Android app
  console.log("Running inside Android WebView");
  window.AndroidInterface.onWebAppReady();
}

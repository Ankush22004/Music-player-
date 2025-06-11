// lang.js

const langBtn = document.createElement("select");
langBtn.className = "lang-select";

langBtn.innerHTML = `
  <option value="en">🇺🇸 English</option>
  <option value="hi">🇮🇳 Hindi</option>
`;

document.querySelector(".upload-section").appendChild(langBtn);

const translations = {
  hi: {
    "🎧 BharatVerse Music Player": "🎧 भारतवर्स म्यूज़िक प्लेयर",
    "Upload": "अपलोड करें",
    "Bhajan": "भजन",
    "Song": "गाना",
    "Instrumental": "वाद्य संगीत"
  },
  en: {
    "🎧 भारतवर्स म्यूज़िक प्लेयर": "🎧 BharatVerse Music Player",
    "अपलोड करें": "Upload",
    "भजन": "Bhajan",
    "गाना": "Song",
    "वाद्य संगीत": "Instrumental"
  }
};

langBtn.onchange = () => {
  const lang = langBtn.value;
  document.querySelector("h1").textContent = translations[lang]["🎧 BharatVerse Music Player"];
  document.querySelector("button").textContent = translations[lang]["Upload"];
  const options = document.querySelectorAll("#categorySelect option");
  options[0].textContent = translations[lang]["Bhajan"];
  options[1].textContent = translations[lang]["Song"];
  options[2].textContent = translations[lang]["Instrumental"];
};

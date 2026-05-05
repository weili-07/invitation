
// MUSIC + ENTRY
const music = document.getElementById("bg-music");
const entry = document.getElementById("entry-screen");

entry.addEventListener("click", () => {
  entry.classList.add("hide");

  music.volume = 0;

  music.play().then(() => {
    let v = 0;
    const fade = setInterval(() => {
      v += 0.05;
      music.volume = Math.min(v, 1);
      if (v >= 1) clearInterval(fade);
    }, 200);
  });
});

// COUNTDOWN
const target = new Date("Oct 3, 2026 10:00:00").getTime();

setInterval(() => {
  const now = Date.now();
  const d = target - now;

  document.getElementById("countdown").innerHTML =
    `${Math.floor(d/86400000)}d ${Math.floor(d%86400000/3600000)}h ${Math.floor(d%3600000/60000)}m ${Math.floor(d%60000/1000)}s`;
}, 1000);

// LANGUAGE
function setLang(lang) {
  document.querySelectorAll(".lang").forEach(e => e.classList.remove("active"));

  setTimeout(() => {
    document.querySelectorAll("." + lang).forEach(e => e.classList.add("active"));
  }, 100);

  document.querySelector(".lang-indicator").style.transform =
    lang === "en" ? "translateX(0%)" : "translateX(100%)";
}

setLang("en");
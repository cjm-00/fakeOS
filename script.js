import { displayTime } from "./modules/clock.js";
import { fetchLyrics } from "./modules/lyric.js";
const startBtn = document.querySelector("#startBtn");
const menu = document.querySelector(".menu");
const icon = document.querySelector(".icon");

startBtn.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
});

icon.addEventListener("click", () => {
  icon.classList.toggle("icon--clicked");
});

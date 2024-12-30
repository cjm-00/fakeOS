// import { fetchTime, time } from "./modules/clock.js";
const clock = document.querySelector("#clock");
const startBtn = document.querySelector("#startBtn");
const menu = document.querySelector("#menu");
const lyricIcon = document.querySelector("#lyricIcon");

const fetchTime = async () => {
  const response = await fetch(
    `https://timeapi.io/api/time/current/zone?timeZone=Australia%2FMelbourne`
  );

  const data = await response.json();
  const hour = data.hour;
  let minute = data.minute;
  minute = minute.toString().padStart(2, "0");
  let period = "";
  if (hour < 13) {
    period = "AM";
  } else {
    period = "PM";
  }
  const time = `${hour}:${minute} ${period}`;
  clock.innerText = time;
};

fetchTime();

startBtn.addEventListener("click", () => {
  menu.classList.toggle("menu--closed");
});

lyricIcon.addEventListener("click", () => {
  lyricIcon.classList.toggle("lyricIcon--clicked");
});

const fetchLyrics = async () => {
  const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
  const data = await response.json();
  const lyrics = data.lyrics;
  lyricDisplay.innerText = lyrics;
};

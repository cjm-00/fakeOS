// import { fetchTime, time } from "./modules/clock.js";
const clock = document.querySelector("#clock");
const startBtn = document.querySelector("#startBtn");
const menu = document.querySelector(".menu");
const lyricIcon = document.querySelector("#lyricIcon");
const lyricModal = document.querySelector("#lyric-modal");
const lyricText = document.querySelector("#lyricText");
const submitLyric = document.querySelector("#submitLyric");
const lyricForm = document.querySelector("#lyricForm");
const lyricClose = document.querySelector("#lyricClose");
const icon = document.querySelector(".icon");
// const programsItem = document.querySelector("#programs-item");
// const programsMenu = document.querySelector("#programs-menu");

// programsItem.addEventListener("mouseover", () => {
//   programsMenu.classList.toggle("programs-menu--open");
//   console.log("mouse over trigger");
// });

startBtn.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
});

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
  const time = `${hour} : ${minute} ${period}`;
  clock.innerText = time;
};

fetchTime();
setInterval(fetchTime, 6000);

icon.addEventListener("click", () => {
  icon.classList.toggle("icon--clicked");
});

lyricIcon.addEventListener("dblclick", () => {
  lyricModal.showModal();
});

lyricClose.addEventListener("click", () => {
  lyricForm.reset();
  lyricText.innerText = "Lyrics Appear Here";
  lyricModal.close();
});

const fetchLyrics = async () => {
  const formData = new FormData(lyricForm);
  const songData = Object.fromEntries(formData.entries());
  const artist = songData.artist;
  const title = songData.title;
  const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
  const data = await response.json();
  const myLyrics = data.lyrics;

  lyricText.innerText = myLyrics;
};

lyricForm.addEventListener("submit", (event) => {
  event.preventDefault();
  fetchLyrics();
  console.log("clicked");
});

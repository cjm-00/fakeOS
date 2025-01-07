const lyricIcon = document.querySelector("#lyric-icon");
const lyricModal = document.querySelector("#lyric-modal");
const lyricText = document.querySelector("#lyric-text");
const lyricForm = document.querySelector("#lyric-form");
const lyricClose = document.querySelector("#lyric-close");

lyricIcon.addEventListener("dblclick", () => {
  lyricModal.showModal();
});

lyricClose.addEventListener("click", () => {
  lyricForm.reset();
  lyricText.innerText = "Lyrics Appear Here";
  lyricModal.close();
});

export const fetchLyrics = async () => {
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

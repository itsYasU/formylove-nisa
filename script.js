const surpriseButton = document.getElementById("surpriseButton");
const surpriseNote = document.getElementById("surpriseNote");
const musicButton = document.getElementById("musicButton");
const loveSong = document.getElementById("loveSong");

surpriseButton.addEventListener("click", () => {
  surpriseNote.classList.toggle("visible");
  surpriseButton.textContent = surpriseNote.classList.contains("visible")
    ? "Hide the note"
    : "Tap for a surprise";
});

musicButton.addEventListener("click", () => {
  if (loveSong.paused) {
    loveSong.play();
    musicButton.textContent = "Pause our song";
  } else {
    loveSong.pause();
    musicButton.textContent = "Play our song";
  }
});

loveSong.addEventListener("ended", () => {
  musicButton.textContent = "Play our song";
});

const surpriseButton = document.getElementById("surpriseButton");
const surpriseNote = document.getElementById("surpriseNote");
const musicButton = document.getElementById("musicButton");
const loveSong = document.getElementById("loveSong");

surpriseButton.addEventListener("click", () => {
  surpriseNote.classList.toggle("visible");
  surpriseButton.textContent = surpriseNote.classList.contains("visible")
    ? "Sembunyikan pesan"
    : "Klik untuk kejutan";
});

musicButton.addEventListener("click", () => {
  if (loveSong.paused) {
    loveSong.play();
    musicButton.textContent = "Jeda lagu kita";
  } else {
    loveSong.pause();
    musicButton.textContent = "Putar lagu kita";
  }
});

loveSong.addEventListener("ended", () => {
  musicButton.textContent = "Putar lagu kita";
});

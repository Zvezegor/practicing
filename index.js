const prev = document.querySelector("#prev"),
  next = document.querySelector("#next"),
  slides = document.querySelectorAll(".item");

function remuve() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
}

let n = 0;
remuve();
slides[n].classList.add("active");
next.addEventListener("click", function () {
  n = n + 1;
  slides[n].classList.add("active");
  slides[n - 1].classList.remove("active");
});
prev.addEventListener("click", function () {
  n = n - 1;
  if (n < 0) {
    return (n = slides.length);
  }
  slides[n].classList.add("active");
  slides[n + 1].classList.remove("active");
});
if (n > slides.length) {
  n = 0;
}
if (n < 0) {
  n = slides.length;
}
//modal

const openModal = document.querySelector("#modal-open"),
  modal = document.querySelector(".modal-wrapper"),
  closeModal = document.querySelector("#modal-close");

openModal.addEventListener("click", () => {
  modal.classList.add("active");
});
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

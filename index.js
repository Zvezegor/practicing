const prev = document.querySelector("#prev"),
  next = document.querySelector("#next"),
  slides = document.querySelectorAll(".item");

slides.forEach((slide) => {
  slide.style.display = "none";
});
let n = 0;
slides[n].classList.add("active");
next.addEventListener("click", function () {});

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

//forms

const numInput = document.querySelector("#num"),
  numBtn = document.querySelector("#check-num"),
  div1 = document.querySelector("div"),
  numMessage = document.createElement("h3"),
  textBtn = document.querySelector("#check-text"),
  textInput = document.querySelector("#text");

numBtn.addEventListener("click", () => {
  if (numInput.value != "" && isNaN(numInput.value)) {
    numInput.style.border = "1px solid red";
    div1.appendChild(numMessage);
    numMessage.innerHTML = "Это по-твоему число?";
  } else {
    numInput.style.border = "";
    numMessage.innerHTML = "Красавчик!";
    del();
  }
});
function del() {
  setTimeout(function () {
    numMessage.innerHTML = "";
  }, 2000);
}
textBtn.addEventListener("click", () => {
  if (textInput.value != "" && isNaN(textInput.value)) {
    div1.appendChild(numMessage);
    numMessage.innerHTML = "Красавчик!";
    textInput.style.border = "";
    del();
  } else {
    div1.appendChild(numMessage);
    textInput.style.border = "1px solid red";
    numMessage.innerHTML = "Написано же текст!";
  }
});

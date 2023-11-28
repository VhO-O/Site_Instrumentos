const sliders = document.querySelectorAll(".sliders");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

var radio = document.querySelector(".manual-btn");
var cont = 1;

let currentSlide = 0;

function hideSlider() {
  sliders.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
  sliders[currentSlide].classList.add("on");
}

function nextSlider() {
  hideSlider();
  if (currentSlide == sliders.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if (currentSlide == 0) {
    currentSlide = sliders.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

btnNext.addEventListener("click", nextSlider);
btnPrev.addEventListener("click", prevSlider);

console.log(sliders);

document.getElementById("radio1").checked = true;

setInterval(() => {
  proximaImg();
}, 5000);

function proximaImg() {
  cont++;

  if (cont > 3) {
    cont = 1;
  }

  document.getElementById("radio" + cont).checked = true;
}
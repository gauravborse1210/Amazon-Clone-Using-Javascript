"use strict";

const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0;

//For displaying first header slider img
function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}
changeSlide();

//For header slider btns
prev_btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});

next_btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

//For Product Slider

const scrollContainer = document.querySelectorAll(".products");
scrollContainer.forEach((e) => {
  e.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    e.scrollLeft += evt.deltaY;
  });
});

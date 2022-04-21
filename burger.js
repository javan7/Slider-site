let menuBtn = document.querySelector(".menu-burger");
let nav = document.querySelector(".nav");
let rotate = document.querySelector(".header-info-rotate");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("action");
  nav.classList.toggle("action");
  rotate.classList.toggle("action");
});

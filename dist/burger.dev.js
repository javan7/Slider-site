"use strict";

var menuBtn = document.querySelector(".menu-burger");
var nav = document.querySelector(".nav");
var rotate = document.querySelector(".header-info-rotate");
var line = document.querySelector(".burger-line");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("action");
  nav.classList.toggle("action");
  rotate.classList.toggle("action");
  line.classList.toggle("action");
});
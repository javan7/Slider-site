"use strict";

new Splide(".splide", {
  type: "fade",
  rewind: "true",
  speed: number = 1000,
  autoplay: true,
  interval: 3000,
  pagination: false,
  arrows: false,
  pauseOnHover: false
}).mount();
new Splide(".splide2", {
  type: "loop",
  speed: number = 1000,
  autoplay: true,
  interval: 3000,
  pagination: false,
  arrows: false,
  perPage: 4,
  perMove: 1,
  pauseOnHover: false,
  breakpoints: {
    375: {
      perPage: 4,
      direction: "ttb",
      height: "950px"
    }
  }
}).mount();
new Splide(".splide", {
  type: "loop",
  speed: (number = 1500),
  autoplay: true,
  interval: 1000,
  pagination: false,
  arrows: false,
}).mount();

new Splide(".splide2", {
  type: "loop",
  speed: (number = 1500),
  autoplay: true,
  interval: 1000,
  pagination: false,
  arrows: false,
  perPage: 4,
  perMove: 1,
}).mount();

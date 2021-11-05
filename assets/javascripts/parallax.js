var parallaxDefault = document.querySelectorAll('.parallax');
new simpleParallax(parallaxDefault, { overflow: true });

var parallaxLarge = document.querySelectorAll('.parallax-large');
new simpleParallax(parallaxLarge, {
  scale: 1.5
});

var parallaxRight = document.querySelectorAll('.parallax-right');
new simpleParallax(parallaxRight, { orientation: 'left' });

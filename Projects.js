const slides = document.querySelector('.carousel-slides');
const totalSlides = document.querySelectorAll('.carousel-slide').length;
let index = 0;

document.querySelector('.prev').addEventListener('click', () => {
  index = (index > 0) ? index - 1 : totalSlides - 1;
  updateCarousel();
});

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateCarousel();
});

function updateCarousel() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

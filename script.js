function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function createAutoSlider(selector, duration) {
  const slides = document.querySelectorAll(selector);

  if (slides.length === 0) return;

  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
  }, duration);
}

document.addEventListener("DOMContentLoaded", () => {
  createAutoSlider(".photography-slide", 3500);
  createAutoSlider(".cooking-slide", 4000);
});
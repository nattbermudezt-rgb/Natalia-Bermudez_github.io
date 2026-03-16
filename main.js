const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("activeDot"));

  slides[index].classList.add("active");
  dots[index].classList.add("activeDot");
}

nextBtn.addEventListener("click", function () {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

prevBtn.addEventListener("click", function () {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    currentSlide = index;
    showSlide(currentSlide);
  });
});
// ----------slider----------

const slides = [...document.querySelector(".slides").children];
let slideIndex = 0;

function setSlide(index) {
  slides[slideIndex].classList.remove("active");
  slideIndex = index;
  slides[slideIndex].classList.add("active");
}

setInterval(() => {
  const nextIndex = (slideIndex + 1) % slides.length;
  setSlide(nextIndex);
}, 4000);

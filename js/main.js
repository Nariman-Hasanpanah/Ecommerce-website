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

// ----------countdown timer----------

let remainingTime = 70000;
const secondsInHour = 3600;
const secondsInMinutes = 60;
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

function renderTime() {
  if (remainingTime == 0) return;
  let hours = Math.floor(remainingTime / secondsInHour);
  let minutes = Math.floor((remainingTime % secondsInHour) / secondsInMinutes);
  let seconds = (remainingTime % secondsInHour) % secondsInMinutes;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

setInterval(() => {
  remainingTime -= 1;
  renderTime();
}, 1000);

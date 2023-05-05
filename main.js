"strict";
document.querySelector("body").style.background = "url(images/background.jpg)";

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");

  const btnleft = document.querySelector(".slider__btn--left");
  const btnright = document.querySelector(".slider__btn--right");
  const dots = document.querySelector(".dots");

  slider.style.transform = "scale(0.5) ";

  const curMax = slides.length;
  let curSlide = 0;
  const init = function () {
    gotoslide(0);
    addDots();
    activeDots(0);
  };
  const gotoslide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const addDots = function () {
    slides.forEach((_, i) =>
      dots.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      )
    );
  };

  const nextSlide = function () {
    if (curSlide === curMax - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    gotoslide(curSlide);
    activeDots(curSlide);
  };
  const previousSlide = function () {
    if (curSlide === 0) {
      curSlide = curMax - 1;
    } else {
      curSlide--;
    }
    gotoslide(curSlide);
    activeDots(curSlide);
  };
  const activeDots = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"`)
      .classList.add("dots__dot--active");
  };

  init();

  btnright.addEventListener("click", nextSlide);

  btnleft.addEventListener("click", previousSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      previousSlide();
    }
  });
  dots.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const numberOfslide = e.target.dataset.slide;
      gotoslide(numberOfslide);
      activeDots(numberOfslide);
    }
  });
};

slider();

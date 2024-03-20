const carousel = document.querySelector(".scroll-cards");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

rightArrow.addEventListener("click", () => {
  const scrollAmount = firstCardWidth;
  carousel.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

leftArrow.addEventListener("click", () => {
  const scrollAmount = -firstCardWidth;
  carousel.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

//
const menu = document.querySelector(".ham");
menu.addEventListener("click", () => {
  document.querySelector(".mobile-header").style.animation =
    "slideIn 0.5s forwards";
  document.querySelector(".mobile-header").style.display = "flex";
});

const close = document.querySelector(".fa-close");
close.addEventListener("click", () => {
  document.querySelector(".mobile-header").style.animation =
    "slideout 0.5s forwards";
  document.querySelector(".mobile-header").style.display = "none";
});

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



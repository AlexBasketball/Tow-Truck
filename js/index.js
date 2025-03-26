document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".header-burger");
  const burgerTopStick = document.querySelector(".header-burger__stick--top");
  const burgerMiddleStick = document.querySelector(
    ".header-burger__stick--middle"
  );
  const burgerBottomStick = document.querySelector(
    ".header-burger__stick--bottom"
  );
  const burgerMenu = document.querySelector(".holder");

  const navLinks = document.querySelectorAll(".nav-list__item_link");

  const handleBurger = () => {
    burgerTopStick.classList.toggle("rotate-top");
    burgerTopStick.classList.toggle("background");
    burgerMiddleStick.classList.toggle("hidden");
    burgerBottomStick.classList.toggle("rotate-bottom");
    burgerBottomStick.classList.toggle("background");
    burgerMenu.classList.toggle("hidden");
  };

  navLinks.forEach((item) => {
    item.addEventListener("click", () => {
      handleBurger();
    });
  });

  burgerButton.addEventListener("click", () => {
    handleBurger();
  });

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      650: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },

    navigation: {
      nextEl: ".swiper-custom-next",
      prevEl: ".swiper-custom-prev",
    },

    autoplay: {
      delay: 4000,
    },
  });
});

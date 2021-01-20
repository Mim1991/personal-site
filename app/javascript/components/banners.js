const initBannerSlide = () => {
  const bannerOne = document.querySelector(".top-stack");
  const bannerTwo = document.querySelector(".second-stack");
  const bannerThree = document.querySelector(".third-stack");
  const bannerFour = document.querySelector(".fourth-stack");

  const bannerOneOffset =
    bannerOne.getBoundingClientRect().left + bannerOne.offsetWidth;
  const bannerTwoOffset =
    bannerTwo.getBoundingClientRect().left + bannerTwo.offsetWidth;
  const bannerThreeOffset =
    bannerThree.getBoundingClientRect().left + bannerThree.offsetWidth;
  const bannerFourOffset =
    bannerFour.getBoundingClientRect().left + bannerFour.offsetWidth;

  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;

    const slideOneMoment =
      scroll / (bannerOne.getBoundingClientRect().top + bannerOne.offsetHeight);
    const slideTwoMoment =
      scroll / (bannerTwo.getBoundingClientRect().top + bannerTwo.offsetHeight);
    const slideThreeMoment =
      scroll /
      (bannerThree.getBoundingClientRect().top + bannerThree.offsetHeight);
    const slideFourMoment =
      scroll /
      (bannerFour.getBoundingClientRect().top + bannerFour.offsetHeight);

    const slideOneFunction =
      -bannerOneOffset + slideOneMoment * bannerOneOffset;
    const slideTwoFunction =
      -bannerTwoOffset + slideTwoMoment * bannerTwoOffset;
    const slideThreeFunction =
      -bannerThreeOffset + slideThreeMoment * bannerThreeOffset;
    const slideFourFunction =
      -bannerFourOffset + slideFourMoment * bannerFourOffset;

    if (slideOneFunction <= 0) {
      bannerOne.style.transform = `translateX(${slideOneFunction}px)`;
    }
    if (slideTwoFunction <= 0) {
      bannerTwo.style.transform = `translateX(${-slideTwoFunction}px)`;
    }
    if (slideThreeFunction <= 0) {
      bannerThree.style.transform = `translateX(${slideThreeFunction}px)`;
    }
    if (slideFourFunction <= 0) {
      bannerFour.style.transform = `translateX(${-slideFourFunction}px)`;
    }
  });
};

export { initBannerSlide };

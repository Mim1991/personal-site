const initBannerSlide = () => {
  setTimeout(function () {
    const bannerOne = document.querySelector(".slide-in");
    const bannerTwo = document.querySelector(".second-stack");
    const bannerThree = document.querySelector(".third-stack");
    const bannerFour = document.querySelector(".fourth-stack");

    function bannerDistance(banner) {
      return banner.getBoundingClientRect().left;
    }

    const bannerOneOffset =
      bannerOne.getBoundingClientRect().left + bannerOne.offsetWidth;
    const bannerTwoOffset =
      bannerTwo.getBoundingClientRect().left + bannerTwo.offsetWidth;
    const bannerThreeOffset =
      bannerThree.getBoundingClientRect().left + bannerThree.offsetWidth;
    const bannerFourOffset =
      bannerFour.getBoundingClientRect().left + bannerFour.offsetWidth;

    window.addEventListener("scroll", () => {
      let scroll = 0;
      if (bannerOne.getBoundingClientRect().bottom > 0) {
        scroll = window.pageYOffset;
      }
      const slideOneMoment =
        scroll /
        (bannerOne.getBoundingClientRect().top + bannerOne.offsetHeight);

      const slideTwoMoment =
        scroll /
        (bannerTwo.getBoundingClientRect().top + bannerTwo.offsetHeight);

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

      if (slideOneFunction < 0 && slideOneFunction > -bannerOneOffset) {
        bannerOne.style.transform = `translateX(${slideOneFunction}px)`;
        bannerOne.style.opacity = slideOneMoment;
      }

      if (slideTwoFunction < 0 && slideTwoFunction > -bannerTwoOffset) {
        bannerTwo.style.transform = `translateX(${-slideTwoFunction}px)`;
        bannerTwo.style.opacity = slideTwoMoment;
      }
      if (slideThreeFunction <= 0 && slideThreeFunction > -bannerThreeOffset) {
        bannerThree.style.transform = `translateX(${slideThreeFunction}px)`;
        bannerThree.style.opacity = slideThreeMoment;
      }
      if (slideFourFunction <= 0 && slideFourFunction > -bannerFourOffset) {
        bannerFour.style.transform = `translateX(${-slideFourFunction}px)`;
        bannerFour.style.opacity = slideFourMoment;
      }
    });
  }, 3000);
};

export { initBannerSlide };

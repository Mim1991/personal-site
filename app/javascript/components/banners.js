const initBannerSlide = () => {
  setTimeout(function () {
    const bannerOne = document.querySelector(".slide-in");
    const bannerTwo = document.querySelector(".second-stack");
    const bannerThree = document.querySelector(".third-stack");
    const bannerFour = document.querySelector(".fourth-stack");

    // Find distance to center from left of screen
    const bannerOffsetWidth = (banner) => {
      return banner.getBoundingClientRect().left + banner.offsetWidth;
    };
    // Find distance of banner from top of screen
    const bannerOffsetHeight = (banner) => {
      return banner.getBoundingClientRect().top + banner.offsetHeight;
    };
    // Calculate slide distance and moment
    const slideFunction = (bannerOffset, slideMoment) => {
      return -bannerOneOffset + slideMoment * bannerOffset;
    };

    // Apply to banners
    function bannerTransform(
      slideFunction,
      slideMoment,
      banner,
      bannerOffset,
      direction = 1
    ) {
      if (slideFunction < 0 && slideFunction > -bannerOffset) {
        banner.style.transform = `translateX(${direction * slideFunction}px)`;
        banner.style.opacity = slideMoment;
      }
    }

    const bannerOneOffset = bannerOffsetWidth(bannerOne);
    const bannerTwoOffset = bannerOffsetWidth(bannerTwo);
    const bannerThreeOffset = bannerOffsetWidth(bannerThree);
    const bannerFourOffset = bannerOffsetWidth(bannerFour);

    // Calculate scroll position
    window.addEventListener("scroll", () => {
      let scroll = 0;
      if (bannerOne.getBoundingClientRect().bottom > 0) {
        scroll = window.pageYOffset;
      }

      // Find scroll moment
      const slideOneMoment = scroll / bannerOffsetHeight(bannerOne);
      const slideTwoMoment = scroll / bannerOffsetHeight(bannerTwo);
      const slideThreeMoment = scroll / bannerOffsetHeight(bannerThree);
      const slideFourMoment = scroll / bannerOffsetHeight(bannerFour);

      const slideOneFunction = slideFunction(bannerOneOffset, slideOneMoment);
      const slideTwoFunction = slideFunction(bannerTwoOffset, slideTwoMoment);
      const slideThreeFunction = slideFunction(
        bannerThreeOffset,
        slideThreeMoment
      );
      const slideFourFunction = slideFunction(
        bannerThreeOffset,
        slideThreeMoment
      );

      // Applying to banners
      bannerTransform(
        slideOneFunction,
        slideOneMoment,
        bannerOne,
        bannerOneOffset
      );

      bannerTransform(
        slideTwoFunction,
        slideTwoMoment,
        bannerTwo,
        bannerTwoOffset,
        -1
      );

      bannerTransform(
        slideThreeFunction,
        slideThreeMoment,
        bannerThree,
        bannerThreeOffset
      );

      bannerTransform(
        slideFourFunction,
        slideFourMoment,
        bannerFour,
        bannerFourOffset,
        -1
      );
    });
  }, 3000);
};

export { initBannerSlide };

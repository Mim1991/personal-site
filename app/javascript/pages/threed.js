const initScroll = () => {
  function servicesAnimate() {
    const appText = document.querySelector(".web-desc");
    const appTextPosition = appText.getBoundingClientRect().top;
    const designText = document.querySelector(".web-design-content");
    const designTextPosition = designText.getBoundingClientRect().top;
    const learnText = document.querySelector(".learn-select");
    const learnTextPosition = learnText.getBoundingClientRect().top;
    const aboutText = document.querySelector(".about-header");
    const aboutTextPosition = aboutText.getBoundingClientRect().top;
    const aboutDesc = document.querySelector(".about-desc");
    const aboutDescPosition = aboutDesc.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 1.5;

    const textAppear = (textPosition, text) => {
      if (textPosition < screenPosition) {
        text.classList.add("app-text-appear");
      }
    };

    textAppear(appTextPosition, appText);
    textAppear(designTextPosition, designText);
    textAppear(learnTextPosition, learnText);
    textAppear(aboutTextPosition, aboutText);
    textAppear(aboutDescPosition, aboutDesc);
  }

  window.addEventListener("scroll", servicesAnimate);
};

export { initScroll };

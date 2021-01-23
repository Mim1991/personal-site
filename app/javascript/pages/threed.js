const initScroll = () => {
  function servicesAnimate() {
    const appText = document.querySelector(".web-desc");
    const appTextPosition = appText.getBoundingClientRect().top;
    const designText = document.querySelector(".web-design-content");
    const designTextPosition = designText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (appTextPosition < screenPosition) {
      appText.classList.add("app-text-appear");
    }
    if (designTextPosition < screenPosition) {
      designText.classList.add("app-text-appear");
    }
  }

  window.addEventListener("scroll", servicesAnimate);
};

export { initScroll };

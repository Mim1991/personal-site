const initScroll = () => {
  function servicesAnimate() {
    const appText = document.querySelector(".web-desc");
    const appTextPosition = appText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    if (appTextPosition < screenPosition) {
      appText.classList.add("app-text-appear");
    }
  }

  window.addEventListener("scroll", servicesAnimate);
};

export { initScroll };

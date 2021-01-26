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
    const profilePhoto = document.querySelector(".profile-photo");
    const profilePhotoPosition = profilePhoto.getBoundingClientRect().top;
    const aboutDesc = document.querySelector(".about-desc");
    const aboutDescPosition = aboutDesc.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 1.5;

    if (appTextPosition < screenPosition) {
      appText.classList.add("app-text-appear");
    }
    if (designTextPosition < screenPosition) {
      designText.classList.add("app-text-appear");
    }
    if (learnTextPosition < screenPosition) {
      learnText.classList.add("app-text-appear");
    }
    if (aboutTextPosition < screenPosition) {
      aboutText.classList.add("app-text-appear");
    }
    if (profilePhotoPosition < screenPosition) {
      profilePhoto.classList.add("app-text-appear");
    }
    if (aboutDescPosition < screenPosition) {
      aboutDesc.classList.add("app-text-appear");
    }
  }

  window.addEventListener("scroll", servicesAnimate);
};

export { initScroll };

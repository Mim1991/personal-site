const initSkills = () => {
  function skillsAnimate() {
    const skillsText = document.querySelector(".skills-header");
    const skillsTextPosition = skillsText.getBoundingClientRect().top;
    const servicesText = document.querySelector(".header-invis");
    const servicesTextPosition = servicesText.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 1.5;

    if (skillsTextPosition < screenPosition) {
      skillsText.classList.add("appear-header");
    } else {
      skillsText.classList.remove("appear-header");
    }

    if (servicesTextPosition < screenPosition) {
      servicesText.classList.add("appear-header");
    } else {
      servicesText.classList.remove("appear-header");
    }
  }

  window.addEventListener("scroll", skillsAnimate);
};

export { initSkills };

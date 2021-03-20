const initSkills = () => {
  const skillsText = document.querySelector(".skills-header");
  const skillsTextPosition = skillsText.getBoundingClientRect().top;
  const servicesText = document.querySelector(".header-invis");
  const servicesTextPosition = servicesText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  const skillsAnimate = () => {
    const headerAppear = (textPosition, text) => {
      if (textPosition < screenPosition) {
        text.classList.add("appear-header");
      } else {
        text.classList.remove("appear-header");
      }
    };
    headerAppear(skillsTextPosition, skillsText);
    headerAppear(servicesTextPosition, servicesText);
  };

  window.addEventListener("scroll", skillsAnimate);
};

export { initSkills };

const initPortfolio = () => {
  function portfolioAnimate() {
    const borderHeader = document.querySelector(".border-proj-header");
    const projectOne = document.querySelector(".project-one");
    const bordersOne = document.querySelector(".border-proj-one");
    const projectTwo = document.querySelector(".project-two");
    const bordersTwo = document.querySelector(".border-proj-two");
    const projectThree = document.querySelector(".project-three");
    const bordersThree = document.querySelector(".border-proj-three");
    const portfolioHeader = document.querySelector(".portfolio-header");
    const portfolioPosition = portfolioHeader.getBoundingClientRect().top;
    const borderheader = document.querySelector(".border-header");

    const screenPosition = window.innerHeight / 1.5;

    function addClass(item, border) {
      item.classList.add("appear-portfolio");
      border.classList.add("border-full");
    }

    function removeClass(item, border) {
      item.classList.remove("appear-portfolio");
      border.classList.remove("border-full");
    }

    if (portfolioPosition < screenPosition) {
      setTimeout(function () {
        addClass(portfolioHeader, borderHeader);
      }, 400);
      setTimeout(function () {
        addClass(projectOne, bordersOne);
      }, 800);
      setTimeout(function () {
        addClass(projectTwo, bordersTwo);
      }, 1200);
      setTimeout(function () {
        addClass(projectThree, bordersThree);
      }, 1400);
    } else {
      removeClass(portfolioHeader, borderheader);
      removeClass(projectOne, bordersOne);
      removeClass(projectTwo, bordersTwo);
      removeClass(projectThree, bordersThree);
    }
  }
  window.addEventListener("scroll", portfolioAnimate);
};

const initProjectHover = () => {
  const projectOne = document.querySelector(".project-one");
  const projectTwo = document.querySelector(".project-two");
  const projectThree = document.querySelector(".project-three");

  projectOne.addEventListener("mouseenter", () => {
    projectOne.classList.add("project-one-hover");
  });
  projectOne.addEventListener("mouseleave", () => {
    projectOne.classList.remove("project-one-hover");
  });
  projectTwo.addEventListener("mouseenter", () => {
    projectTwo.classList.add("project-two-hover");
  });
  projectTwo.addEventListener("mouseleave", () => {
    projectTwo.classList.remove("project-two-hover");
  });
  projectThree.addEventListener("mouseenter", () => {
    projectThree.classList.add("project-three-hover");
  });
  projectThree.addEventListener("mouseleave", () => {
    projectThree.classList.remove("project-three-hover");
  });
};

export { initPortfolio, initProjectHover };

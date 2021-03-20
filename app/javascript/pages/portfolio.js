const initPortfolio = () => {
  const portfolioAnimate = () => {
    const borderHeader = document.querySelector(".border-proj-header");
    const projectOne = document.querySelector(".project-one");
    const bordersOne = document.querySelector(".border-proj-one");
    const projectTwo = document.querySelector(".project-two");
    const bordersTwo = document.querySelector(".border-proj-two");
    const projectThree = document.querySelector(".project-three");
    const bordersThree = document.querySelector(".border-proj-three");
    const portfolioHeader = document.querySelector(".portfolio-header");
    const borderheader = document.querySelector(".border-header");

    // Calculate the top of the portfolio
    const portfolioPosition = portfolioHeader.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    // Functions to add/remove classes
    const addClass = (item, border) => {
      item.classList.add("appear-portfolio");
      border.classList.add("border-full");
    };

    const addHeaderBorder = (item, border) => {
      item.classList.add("appear-portfolio");
      border.classList.add("border-full-header");
    };

    const removeClass = (item, border) => {
      item.classList.remove("appear-portfolio");
      border.classList.remove("border-full");
    };

    // Set timing for revealing projects and removing after scroll
    if (portfolioPosition < screenPosition) {
      setTimeout(function () {
        addHeaderBorder(portfolioHeader, borderHeader);
      }, 100);
      setTimeout(function () {
        addClass(projectOne, bordersOne);
      }, 500);
      setTimeout(function () {
        addClass(projectTwo, bordersTwo);
      }, 800);
      setTimeout(function () {
        addClass(projectThree, bordersThree);
      }, 1100);
    } else {
      removeClass(portfolioHeader, borderheader);
      removeClass(projectOne, bordersOne);
      removeClass(projectTwo, bordersTwo);
      removeClass(projectThree, bordersThree);
    }
  };
  window.addEventListener("scroll", portfolioAnimate);
};

// Changing design when project is hovered on
const initProjectHover = () => {
  const projectOne = document.querySelector(".project-one");
  const stackOne = document.querySelector(".project-one .stackuse");
  const projectTwo = document.querySelector(".project-two");
  const stackTwo = document.querySelector(".project-two .stackuse");
  const projectThree = document.querySelector(".project-three");
  const stackThree = document.querySelector(".project-three .stackuse");

  // Makes stack and colour visiible and removes it after mouseleave
  const projectHover = (project, stack, color) => {
    project.addEventListener("mouseenter", () => {
      stack.style.visibility = "visible";
      project.style.backgroundColor = color;
    });
    project.addEventListener("mouseleave", () => {
      stack.style.visibility = "hidden";
      project.style.backgroundColor = "#1b1b1b";
    });
  };

  projectHover(projectOne, stackOne, "#28013A");
  projectHover(projectTwo, stackTwo, "#00333A");
  projectHover(projectThree, stackThree, "#0F002E");
};

export { initPortfolio, initProjectHover };

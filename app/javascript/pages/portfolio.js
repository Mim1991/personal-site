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

    function addHeaderBorder(item, border) {
      item.classList.add("appear-portfolio");
      border.classList.add("border-full-header");
    }

    function removeClass(item, border) {
      item.classList.remove("appear-portfolio");
      border.classList.remove("border-full");
    }

    if (portfolioPosition < screenPosition) {
      setTimeout(function () {
        addHeaderBorder(portfolioHeader, borderHeader);
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
  const stackOne = document.querySelector(".project-one .stackuse");
  const projectTwo = document.querySelector(".project-two");
  const stackTwo = document.querySelector(".project-two .stackuse");
  const projectThree = document.querySelector(".project-three");
  const stackThree = document.querySelector(".project-three .stackuse");

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

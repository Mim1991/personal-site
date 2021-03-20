const initPortfolio = () => {
  const borderHeader = document.querySelector(".border-proj-header");
  const projectOne = document.querySelector(".project-one");
  const bordersOne = document.querySelector(".border-proj-one");
  const projectTwo = document.querySelector(".project-two");
  const bordersTwo = document.querySelector(".border-proj-two");
  const projectThree = document.querySelector(".project-three");
  const bordersThree = document.querySelector(".border-proj-three");
  const portfolioHeader = document.querySelector(".portfolio-header");
  const borderheader = document.querySelector(".border-header");

  const portfolioAnimate = () => {
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

export { initPortfolio };

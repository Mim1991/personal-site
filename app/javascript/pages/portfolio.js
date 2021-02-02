const initPortfolio = () => {
  function portfolioAnimate() {
    const borderHeader = document.querySelector(".border-proj-header");
    const projectOne = document.querySelector(".project-one");
    const projectOnePosition = projectOne.getBoundingClientRect().top;
    const bordersOne = document.querySelector(".border-proj-one");
    const projectTwo = document.querySelector(".project-two");
    const projectTwoPosition = projectTwo.getBoundingClientRect().top;
    const bordersTwo = document.querySelector(".border-proj-two");
    const projectThree = document.querySelector(".project-three");
    const projectThreePosition = projectThree.getBoundingClientRect().top;
    const bordersThree = document.querySelector(".border-proj-three");
    // const dishAdvisor = document.getElementById("dish-advisor");
    // const tropicHot = document.getElementById("tropic-hot");
    // const thisSite = document.getElementById("tropic-hot");
    const portfolioHeader = document.querySelector(".portfolio-header");
    const portfolioPosition = portfolioHeader.getBoundingClientRect().top;
    const borderheader = document.querySelector(".border-header");

    const screenPosition = window.innerHeight / 1.5;

    if (portfolioPosition < screenPosition) {
      portfolioHeader.classList.add("appear-portfolio");
      borderheader.classList.add("border-full");
    } else {
      portfolioHeader.classList.remove("appear-portfolio");
      portfolioHeader.classList.remove("border-full");
    }

    if (projectOnePosition < screenPosition) {
      projectOne.classList.add("appear-portfolio");
      bordersOne.classList.add("border-full");
    } else {
      projectOne.classList.remove("appear-portfolio");
      projectOne.classList.remove("border-full");
    }
    if (projectTwoPosition < screenPosition) {
      projectTwo.classList.add("appear-portfolio");
      bordersTwo.classList.add("border-full");
    } else {
      projectTwo.classList.remove("appear-portfolio");
      projectTwo.classList.remove("border-full");
    }

    if (projectThreePosition < screenPosition) {
      projectThree.classList.add("appear-portfolio");
      bordersThree.classList.add("border-full");
    } else {
      projectThree.classList.remove("appear-portfolio");
      projectThree.classList.remove("border-full");
    }
  }
  window.addEventListener("scroll", portfolioAnimate);
};

const initProjectHover = () => {
  const projectOne = document.querySelector(".project-one");
  const projectTwo = document.querySelector(".project-two");
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
};

export { initPortfolio, initProjectHover };
// window.addEventListener("scroll", () => {
//   let scroll = window.pageYOffset;
//   let distanceBordHead = 100 / (portfolioHeader.offsetTop - scroll);
//   // console.log(portfolioHeader.offsetTop, scroll, distanceB);
//   let distanceBordOne = 100 / (projectOne.offsetTop - scroll);
//   let distanceBordTwo = 100 / (projectTwo.offsetTop - scroll);
//   let distanceBordThree = 100 / (projectThree.offsetTop - scroll);
//   // let opacityTwo = 1 / distanceOne;
//   if (distanceBordHead <= 1 && distanceBordHead >= 0) {
//     borderHeader.style.width = `${distanceBordHead * 100}%`;
//     portfolioHeader.style.opacity = distanceBordHead;
//     portfolioHeader.style.transform = `translateY(${
//       (1 - distanceBordHead) * 200
//     }px)`;
//   }
//   if (distanceBordOne <= 1 && distanceBordOne >= 0) {
//     bordersOne.style.width = `${distanceBordOne * 100}%`;
//     projectOne.style.opacity = distanceBordOne;
//     projectOne.style.transform = `translateY(${
//       (1 - distanceBordOne) * 150
//     }px)`;
//   }
//   if (distanceBordTwo <= 1 && distanceBordTwo >= 0) {
//     bordersTwo.style.width = `${distanceBordTwo * 100}%`;
//     projectTwo.style.opacity = distanceBordTwo;
//     projectTwo.style.transform = `translateY(${
//       (1 - distanceBordTwo) * 150
//     }px)`;
//   }
//   if (distanceBordThree <= 1 && distanceBordThree >= 0) {
//     bordersThree.style.width = `${distanceBordThree * 100}%`;
//     projectThree.style.opacity = distanceBordThree;
//     projectThree.style.transform = `translateY(${
//       (1 - distanceBordThree) * 150
//     }px)`;
//   }
//   // console.dir(portfolioHeader);
//   // console.log(scroll);
//   // let portHeadDistance = scroll / portfolioHeader.offsetHeight - 10;
//   // console.log(scroll, portHeadDistance);
//   // bordersPort.forEach((border) => {
//   //   if (portHeadDistance <= 1) {
//   //     border.style.width = `${portHeadDistance * 100}%`;
//   //   }
//   // });
// });

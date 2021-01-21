const initPortfolio = () => {
  const portfolioHeader = document.querySelector(".portfolio-header");
  const borderHeader = document.querySelector(".border-proj-header");
  const projectOne = document.querySelector(".project-one");
  const bordersOne = document.querySelector(".border-proj-one");
  const projectTwo = document.querySelector(".project-two");
  const bordersTwo = document.querySelector(".border-proj-two");
  const projectThree = document.querySelector(".project-three");
  const bordersThree = document.querySelector(".border-proj-three");

  const dishAdvisor = document.getElementById("dish-advisor");
  const tropicHot = document.getElementById("tropic-hot");
  const thisSite = document.getElementById("tropic-hot");

  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;

    let distanceBordHead = 100 / (portfolioHeader.offsetTop - scroll);
    // console.log(portfolioHeader.offsetTop, scroll, distanceB);
    let distanceBordOne = 100 / (projectOne.offsetTop - scroll);

    let distanceBordTwo = 100 / (projectTwo.offsetTop - scroll);

    let distanceBordThree = 100 / (projectThree.offsetTop - scroll);

    // let opacityTwo = 1 / distanceOne;

    if (distanceBordHead <= 1 && distanceBordHead >= 0) {
      borderHeader.style.width = `${distanceBordHead * 100}%`;
      portfolioHeader.style.opacity = distanceBordHead;
      portfolioHeader.style.transform = `translateY(${
        (1 - distanceBordHead) * 200
      }px)`;
    }

    if (distanceBordOne <= 1 && distanceBordOne >= 0) {
      bordersOne.style.width = `${distanceBordOne * 100}%`;
      projectOne.style.opacity = distanceBordOne;
      projectOne.style.transform = `translateY(${
        (1 - distanceBordOne) * 150
      }px)`;
    }

    if (distanceBordTwo <= 1 && distanceBordTwo >= 0) {
      bordersTwo.style.width = `${distanceBordTwo * 100}%`;
      projectTwo.style.opacity = distanceBordTwo;
      projectTwo.style.transform = `translateY(${
        (1 - distanceBordTwo) * 150
      }px)`;
    }

    if (distanceBordThree <= 1 && distanceBordThree >= 0) {
      bordersThree.style.width = `${distanceBordThree * 100}%`;
      projectThree.style.opacity = distanceBordThree;
      projectThree.style.transform = `translateY(${
        (1 - distanceBordThree) * 150
      }px)`;
    }
    // console.dir(portfolioHeader);
    // console.log(scroll);

    // let portHeadDistance = scroll / portfolioHeader.offsetHeight - 10;

    // console.log(scroll, portHeadDistance);

    // bordersPort.forEach((border) => {
    //   if (portHeadDistance <= 1) {
    //     border.style.width = `${portHeadDistance * 100}%`;
    //   }
    // });
  });
};

export { initPortfolio };

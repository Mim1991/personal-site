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

export { initProjectHover };

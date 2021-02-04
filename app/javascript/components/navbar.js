const initNavbar = () => {
  const titleNav = document.querySelectorAll(".title-nav");
  const exitMenu = document.querySelector(".main-navigation-toggle");

  titleNav.forEach((element) => {
    element.addEventListener("click", () => {
      exitMenu.checked = false;
    });
  });
};
export { initNavbar };

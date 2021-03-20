const initNavbar = () => {
  const titleNav = document.querySelectorAll(".title-nav");
  const exitMenu = document.querySelector(".main-navigation-toggle");
  // Bug where navbar wouldn't close on user click now makes a fake click on the exit button instead
  titleNav.forEach((element) => {
    element.addEventListener("click", () => {
      exitMenu.checked = false;
    });
  });
};
export { initNavbar };

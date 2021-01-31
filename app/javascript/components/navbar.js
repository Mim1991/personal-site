const initNavbar = () => {
  const navbarContainer = document.querySelector(".container");
  if (window.innerWidth < 550) {
    navbarContainer.innerHTML = "";
  }
};
export { initNavbar };

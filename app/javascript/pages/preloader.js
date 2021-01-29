const initPreloader = () => {
  const loading = document.querySelector(".preload");
  const waitingText = document.querySelector(".invis");

  // window.addEventListener("load", (event) => {
  //   event.preventDefault();
  //   loading.classList.add("preload-finish");
  //   loading.remove();
  // });

  window.onload = function () {
    loading.style.display = "none";
  };

  setTimeout(function () {
    waitingText.classList.add("not-invis");
  }, 7000);
};

export { initPreloader };

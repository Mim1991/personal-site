const initPreloader = () => {
  const loading = document.querySelector(".preload");
  console.log(loading);
  window.addEventListener("load", () => {
    loading.classList.add("preload-finish");
  });
};

export { initPreloader };

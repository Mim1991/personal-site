const initAbout = () => {
  const hiddenPhoto = document.querySelector(".hidden");
  const download = document.querySelector(".download");

  download.addEventListener("mouseenter", () => {
    hiddenPhoto.classList.add("show");
  });

  download.addEventListener("mouseleave", () => {
    hiddenPhoto.classList.remove("show");
  });
};

export { initAbout };

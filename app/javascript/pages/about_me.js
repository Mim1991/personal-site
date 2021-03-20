const initAbout = () => {
  const hiddenPhoto = document.querySelector(".hidden");
  const download = document.querySelector(".download");

  // Hover effect to have winking profile picture
  download.addEventListener("mouseenter", () => {
    hiddenPhoto.classList.add("show");
  });

  download.addEventListener("mouseleave", () => {
    hiddenPhoto.classList.remove("show");
  });
};

export { initAbout };

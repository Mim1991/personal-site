import TypeIt from "typeit";

const initPreloader = () => {
  const loading = document.querySelector(".preload");
  const waitingText = document.querySelector(".invis");
  const loadingText = document.querySelector("#loading");

  // window.addEventListener("load", (event) => {
  //   event.preventDefault();
  //   loading.classList.add("preload-finish");
  //   loading.remove();
  // });

  window.onload = function () {
    loading.style.display = "none";
  };

  new TypeIt(loadingText, {
    strings: [
      "Spinning up the hamster...⚙️",
      "Charging flux capacitator...",
      "Shovelling coal into the server...",
      "Adding randomly mispeled words into text...",
      "Discovering new ways to make you wait...⏳",
      "Almost there...",
    ],
    speed: 20,
    loop: false,
  }).go();

  // setTimeout(function () {
  //   waitingText.classList.add("not-invis");
  // }, 7000);
};

export { initPreloader };

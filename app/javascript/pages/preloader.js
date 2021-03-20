import TypeIt from "typeit";

const initPreloader = () => {
  const loading = document.querySelector(".preload");
  const loadingText = document.querySelector("#loading");

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
};

export { initPreloader };

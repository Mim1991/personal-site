import gsap from "gsap";

const initCursor = () => {
  const bigBall = document.querySelector(".cursor__ball--big");

  const smallBall = document.querySelector(".cursor__ball--small");
  const links = document.querySelectorAll("a, .hover");

  // Listeners
  document.addEventListener("mousemove", onMouseMove);
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", onMouseHover);
    links[i].addEventListener("mouseleave", onMouseHoverOut);
  }

  // Move the cursor
  function onMouseMove(e) {
    gsap.to(bigBall, 0.4, {
      x: e.pageX - 15,
      y: e.clientY,
    });
    gsap.to(smallBall, 0.1, {
      x: e.pageX - 5,
      y: e.clientY,
    });
  }

  // Hover an element
  function onMouseHover() {
    gsap.to(bigBall, 0.3, {
      scale: 4,
    });
  }
  function onMouseHoverOut() {
    gsap.to(bigBall, 0.3, {
      scale: 1,
    });
  }
};

export { initCursor };

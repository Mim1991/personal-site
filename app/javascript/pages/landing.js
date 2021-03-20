const initLanding = () => {
  const translate = document.querySelectorAll(".translate");
  const bigTitle = document.querySelector(".big-title");
  const shadow = document.querySelector(".shadow");

  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;

    translate.forEach((element) => {
      let speed = element.dataset.speed;
      element.style.transform = `translateY(${scroll * speed}px)`;
    });

    // Opacity on scroll
    bigTitle.style.opacity = -scroll / (window.innerHeight / 1.5) + 1;
    shadow.style.height = `${scroll * 0.7 + 300}px`;
  });
};

export { initLanding };

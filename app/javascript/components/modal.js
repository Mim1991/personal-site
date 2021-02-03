const initModal = () => {
  const skillsheight = document.querySelector(".skills-content");
  const ruby = document.querySelector("#ruby");
  const exit = document.querySelector(".exit");
  console.dir(skillsheight);
  const skillModal = document.querySelector(".skill-modal");

  function showModal(skill, modal) {
    skill.addEventListener("click", () => {
      modal.classList.add("skill-modal-show");
    });
    exit.addEventListener("click", (event) => {
      event.stopPropagation();
      modal.classList.remove("skill-modal-show");
    });
  }

  showModal(ruby, skillModal);
};
export { initModal };

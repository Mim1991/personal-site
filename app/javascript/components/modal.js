const initModal = () => {
  // h3 selector on home page
  const ruby = document.querySelector("#ruby");
  const rubyrails = document.querySelector("#rubyrails");
  const react = document.querySelector("#react");
  const javascript = document.querySelector("#javascript");
  const css = document.querySelector("#css");
  const threeDDesign = document.querySelector("#threeddesign");
  const bootstrap = document.querySelector("#bootstrap");
  const github = document.querySelector("#github");
  const heroku = document.querySelector("#heroku");
  const photoshop = document.querySelector("#photoshop");
  const html = document.querySelector("#html");
  const matlab = document.querySelector("#matlab");
  const node = document.querySelector("#node");
  const uiux = document.querySelector("#uiux");
  const postgresql = document.querySelector("#postgresql");

  // modal selectors in modal
  const rubyModal = document.querySelector("#ruby-skill");
  const rubyrailsModal = document.querySelector("#rubyrails-skill");
  const reactModal = document.querySelector("#react-skill");
  const jsModal = document.querySelector("#js-skill");
  const cssModal = document.querySelector("#css-skill");
  const threeDModal = document.querySelector("#threed-skill");
  const bootstrapModal = document.querySelector("#bootstrap-skill");
  const githubModal = document.querySelector("#github-skill");
  const herokuModal = document.querySelector("#heroku-skill");
  const photoshopModal = document.querySelector("#photoshop-skill");
  const htmlModal = document.querySelector("#html-skill");
  const matlabModal = document.querySelector("#matlab-skill");
  const nodeModal = document.querySelector("#node-skill");
  const uiuxModal = document.querySelector("#uiux-skill");
  const postgresqlModal = document.querySelector("#postgresql-skill");

  const exit = document.querySelectorAll(".exit");

  function showModal(skill, modal) {
    skill.addEventListener("click", () => {
      modal.classList.add("skill-modal-show");
    });
    exit.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.stopPropagation();
        modal.classList.remove("skill-modal-show");
      });
    });
  }

  showModal(ruby, rubyModal);
  showModal(rubyrails, rubyrailsModal);
  showModal(react, reactModal);
  showModal(javascript, jsModal);
  showModal(css, cssModal);
  showModal(threeDDesign, threeDModal);
  showModal(bootstrap, bootstrapModal);
  showModal(github, githubModal);
  showModal(heroku, herokuModal);
  showModal(photoshop, photoshopModal);
  showModal(html, htmlModal);
  showModal(matlab, matlabModal);
  showModal(node, nodeModal);
  showModal(uiux, uiuxModal);
  showModal(postgresql, postgresqlModal);
};
export { initModal };

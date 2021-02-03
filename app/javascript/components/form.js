const initForm = () => {
  const formSelect = document.querySelector("form");

  formSelect.addEventListener("submit", function () {
    console.log("form submitted");
  });
};

export { initForm };

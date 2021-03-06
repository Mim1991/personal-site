// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
import { initLanding } from "../pages/landing.js";
import { initBannerSlide } from "../components/banners.js";
import { initPortfolio } from "../pages/portfolio.js";
import { initProjectHover } from "../pages/project_hover.js";
import { initScroll } from "../pages/threed.js";
import { initSkills } from "../pages/skills.js";
import { initAbout } from "../pages/about_me.js";
import { initPreloader } from "../pages/preloader.js";
import { initNavbar } from "../components/navbar.js";
import { initCursor } from "../components/cursor.js";
import { initForm } from "../components/form.js";
import { initModal } from "../components/modal.js";

document.addEventListener("turbolinks:load", () => {
  // Call your functions here, e.g:
  // initSelect2();
  initPreloader();
  initLanding();
  initBannerSlide();

  initPortfolio();
  initScroll();
  initSkills();
  initAbout();

  initNavbar();
  initCursor();
  initProjectHover();
  initForm();
  initModal();
});

import _ from "lodash";
import { util } from "./Util/utilities.js";

/**
 * @author Vigra <vkormoczy@gmail.comm>
 * @version 0.0.0
 * @description My portfolio app
 *
 * @ModuleControllers dataController, callHistoryController, UIController, utililies, controller
 */

// We call the DOM of your classes from utilities.js
const DOM = util.getDomStrings();

const openMenuBtn = util.getEl(DOM.menuBtn);
const closeMenuBtn = util.getEl(DOM.closeMenuBtn);
const desktopMenu = util.getEl(DOM.desktopMenu);
const mobileMenu = util.getEl(DOM.mobileMenu);
const mobileMenuItems = util.getElAll(DOM.mobileMenuItems);

// Handle menu - open
const openMenu = function () {
  desktopMenu.classList.toggle("close-menu");
  mobileMenu.classList.toggle("open-menu");
  closeMenuBtn.classList.toggle("show-close-menu-btn");
  document.body.style.position = "fixed";
};

openMenuBtn.addEventListener("click", openMenu);

// Handle menu - close
const closeMenu = function () {
  mobileMenu.classList.toggle("open-menu");
  closeMenuBtn.classList.toggle("show-close-menu-btn");
  document.body.style.position = "static";
};

closeMenuBtn.addEventListener("click", closeMenu);

mobileMenuItems.forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

// Handle window resize
const handleResizeForMenu = function () {
  const breakpoint = 768;

  if (window.innerWidth > breakpoint) {
    if (mobileMenu.classList.contains("open-menu")) closeMenu();
  }
};

window.addEventListener("resize", handleResizeForMenu);

// Handle dropdown lists
const skillsList = [...util.getElAll(".skills")];
const chevronBtns = util.getElAll(".chevron");

chevronBtns.forEach(function (arrow) {
  arrow.addEventListener("click", function () {
    skillsList[Array.from(chevronBtns).indexOf(arrow)].classList.toggle(
      "toggleSkills"
    );
    arrow.classList.toggle("toggleChevron");
  });
});

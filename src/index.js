import _ from 'lodash'
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
const mobileMenu = util.getElAll(DOM.mobileMenu);
const mobileMenuItems = mobileMenu;
const worksSection = util.getEl(DOM.worksSection);



// Generate projects
let btnId = 0;

// createProjectPopupCards(projects);

// Open project popup
const seeProjectBtns = util.getElAll(".see-project");
const projectPopups = [...util.getElAll(".project-container")];

seeProjectBtns.forEach((btn) => {
  btn.addEventListener("click", function()  {
    projectPopups[btn.id].style.display = "block";
    document.body.style.position = "fixed";
  });
});


// Close project popup
const closePopupBtns = [...util.getElAll(".close-popup-btn")];

closePopupBtns.forEach( function(closeBtn)  {
  closeBtn.addEventListener("click", function() {
    const idOfCloseBtn = closeBtn.id.charAt(closeBtn.id.length - 1);
    projectPopups[idOfCloseBtn].style.display = "none";
    document.body.style.position = "static";
  });
});

// Handle menu - open
const openMenu = function() {
  desktopMenu.classList.toggle("close-menu");
  mobileMenu.classList.toggle("open-menu");
  closeMenuBtn.classList.toggle("show-close-menu-btn");
  document.body.style.position = "fixed";
};

openMenuBtn.addEventListener("click", openMenu);

// Handle menu - close
const closeMenu = function() {
  mobileMenu.classList.toggle("open-menu");
  closeMenuBtn.classList.toggle("show-close-menu-btn");
  document.body.style.position = "static";
};

closeMenuBtn.addEventListener("click", closeMenu);

mobileMenuItems.forEach( function(link) {
  link.addEventListener("click", closeMenu);
});

// Handle window resize
const handleResizeForMenu = function() {
  const breakpoint = 768;

  projectPopups.forEach( function(popup) {
    popup.style.display = "none";
    document.body.style.position = "static";
  });

  if (window.innerWidth > breakpoint) {
    if (mobileMenu.classList.contains("open-menu")) closeMenu();
  }
};

window.addEventListener("resize", handleResizeForMenu);

// Handle dropdown lists
const skillsList = [...util.getElAll(".skills")];
const chevronBtns = util.getElAll(".chevron");

chevronBtns.forEach( function(arrow) {
  arrow.addEventListener("click", function() {
    skillsList[Array.from(chevronBtns).indexOf(arrow)].classList.toggle(
      "toggleSkills"
    );
    arrow.classList.toggle("toggleChevron");
  });
});

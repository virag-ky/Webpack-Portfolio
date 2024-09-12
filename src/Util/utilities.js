/**
 * @author Allen Carter <allenncartercanvagmail.com>
 * @version 0.0.0
 * @description Utilities for the portfolio app
 *
 * @ModuleControllers DomStrings, getEl, getElAll
 */

const util = (function () {
  const DOMstrings = {
    menuBtn: ".menu-btn",
    closeMenuBtn: ".close-menu-btn",
    desktopMenu: ".desktop-menu",
    mobileMenu: ".mobile-menu",
    mobileMenuItems: ".mobile-menu li",
    worksSection: ".works-section",
  };

  return {
    getEl: (el) => {
      return document.querySelector(el);
    },
    getElAll: (el) => {
      return document.querySelectorAll(el);
    },
    getDomStrings: () => {
      return DOMstrings;
    },
  };
})();

export { util };

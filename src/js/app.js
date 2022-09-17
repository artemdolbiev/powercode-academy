// Hamburger menu
import {menuInit, menuOpen, menuClose} from './libs/hamburger.js';

menuInit();

// Popup
'use strict';
const popup = (popup, overlayHidden, closePopup, popupLink) => {
  const popupWindow = document.querySelector(popup);
  const overlay = document.querySelector(overlayHidden);
  const btnClocePopupWindow = document.querySelector(closePopup);
  const btnsShowPopupWindow = document.querySelectorAll(popupLink);
  console.log(btnsShowPopupWindow);

  const showPopupWindow = function() {
    popupWindow.classList.remove('hidden-popup');
    overlay.classList.remove('hidden-popup');
  }

  const closePopupWindow = function() {
    popupWindow.classList.add('hidden-popup');
    overlay.classList.add('hidden-popup');
  };

  for (let i = 0; i < btnsShowPopupWindow.length; i++) {
    btnsShowPopupWindow[i].addEventListener('click', showPopupWindow);
  }

  btnClocePopupWindow.addEventListener('click', closePopupWindow);
  overlay.addEventListener('click', closePopupWindow);

  document.addEventListener('keydown', function(e) {
    console.log(e);

    if (e.key === 'Escape' && !popupWindow.classList.contains('hidden-popup')) {
      closePopupWindow();
    }
  })
};

popup('.popup', '.overlay', '.close-popup', '.popup-link');
popup('.popup2', '.overlay', '.close-popup2', '.popup-link2');
popup('.video', '.video-overlay', '.close-video', '.video-link');


// tabs

let coursesTabs = document.getElementById("courses_tabs");
    let ctns = coursesTabs.getElementsByClassName("courses__tabs_btn");
    for (let i = 0; i < ctns.length; i++) {
        ctns[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("courses__tabs_active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" courses__tabs_active", "");
            }
            this.className += " courses__tabs_active";
        });
    }

    let onlineBlock = document.getElementById("online_tabs");
    let obtn = onlineBlock.getElementsByClassName("onLine__block");
    for (let i = 0; i < obtn.length; i++) {
        obtn[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("onLine__block_active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" onLine__block_active", "");
            }
            this.className += " onLine__block_active";
        });
    }

// ScrollTop
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let rootElement = document.documentElement;

  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  scrollToTopBtn.addEventListener("click", scrollToTop);



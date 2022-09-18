
// Hamburger menu
'use strict';

import {menuInit, menuOpen, menuClose} from './libs/hamburger.js';

menuInit();

// Popup

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
popup('.popup2', '.overlay', '.close-popup2', '.contacs-link');
popup('.video', '.video-overlay', '.close-video', '.video-link');


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


 // ---jQuery
  import './jQuery.min.js';

//  ----------slider
  import './slick.min.js';
// ----------slider

import './libs/carousel.js';


  $(document).ready(function(){
    $('.slider').slick({
      arrows:false,
      dots:true,
      autoplay:true,
      autoplaySpeed:1500,
      centerMode:true,
    });
  });





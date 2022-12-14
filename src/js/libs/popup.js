
const popup = (pPopup) => {

const popupWindow = document.querySelector(pPopup);
const overlay = document.querySelector('.overlay');
const btnClocePopupWindow = document.querySelector('.close-popup');
const btnsShowPopupWindow = document.querySelectorAll('.show-popup');
console.log(btnsShowPopupWindow);

const showPopupWindow = function() {
  popupWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closePopupWindow = function() {
  popupWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowPopupWindow.length; i++) {
  btnsShowPopupWindow[i].addEventListener('click', showPopupWindow);
}

btnClocePopupWindow.addEventListener('click', closePopupWindow);
overlay.addEventListener('click', closePopupWindow);

document.addEventListener('keydown', function(e) {
  console.log(e);

  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closePopupWindow();
  }
})

}

export default popup;
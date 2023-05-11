'use strict';
const allButtons = document.querySelectorAll('.show-modal');
const modalEl = document.querySelector('.modal');
const closeButton = document.querySelector('.close-modal');
const overlayEl = document.querySelector('.overlay');

const openModalFunction = () => {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModalFunction = () => {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

// Open modal for all buttons
for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', openModalFunction);
}

// Closing modal on overlay
overlayEl.addEventListener('click', closeModalFunction);

// Closing modal on "x" button
closeButton.addEventListener('click', closeModalFunction);

// Closing modal on "esc" button
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModalFunction();
  }
});

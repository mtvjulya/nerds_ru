let popup = document.querySelector('.modal-wrapper');
let closeBtn = popup.querySelector('.close-button');
let modalForm = popup.querySelector('.modal-form');
let inputName = modalForm.querySelector('[id="name"]');
let popupLink = document.querySelector('.top-footer-button');
let inputEmail = modalForm.querySelector('[id="email"]');

let isSupportLocalStorage = true;
let storage = '';
try {
  storage = localStorage.getItem('name');
} catch (err) {
  isSupportLocalStorage = false;
}

popupLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  if (storage) {
    inputName.value = storage;
    inputEmail.focus();
  } else {
    inputName.focus();
  }
})

closeBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
})

modalForm.addEventListener('submit', function (evt) {
  if (!inputEmail.value || !inputName.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isSupportLocalStorage) {
      localStorage.setItem('name', inputName.value);
    }
  }
})
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      evt.preventDefault();
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
})
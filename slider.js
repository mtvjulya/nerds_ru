let sliderOne = document.querySelector('.promo-wrapper-1');
let sliderTwo = document.querySelector('.promo-wrapper-2');
let sliderThree = document.querySelector('.promo-wrapper-3');

let sliderControls = document.querySelector('.slide-controls');
let slideButtonOne = sliderControls.querySelector('.slide-button-one');
let slideButtonTwo = sliderControls.querySelector('.slide-button-two');
let slideButtonThree = sliderControls.querySelector('.slide-button-three');

slideButtonOne.addEventListener('click',function(){
  slideButtonOne.classList.add('current-slide');
  slideButtonTwo.classList.remove('current-slide');
  slideButtonThree.classList.remove('current-slide');
  sliderOne.classList.add('promo-current');
  sliderTwo.classList.remove('promo-current');
  sliderThree.classList.remove('promo-current');
})
slideButtonTwo.addEventListener('click',function(){
  slideButtonOne.classList.remove('current-slide');
  slideButtonTwo.classList.add('current-slide');
  slideButtonThree.classList.remove('current-slide');
  sliderOne.classList.remove('promo-current');
  sliderTwo.classList.add('promo-current');
  sliderThree.classList.remove('promo-current');
})
slideButtonThree.addEventListener('click',function(){
  slideButtonOne.classList.remove('current-slide');
  slideButtonTwo.classList.remove('current-slide');
  slideButtonThree.classList.add('current-slide');
  sliderOne.classList.remove('promo-current');
  sliderTwo.classList.remove('promo-current');
  sliderThree.classList.add('promo-current');
})
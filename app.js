// preloader

const preloder1 = document.querySelector('.preloader');
const preloder2 = document.querySelector('.preloader2');

window.addEventListener('DOMContentLoaded', () => {
  preloder1.style.display = "flex";
})

window.addEventListener('load', () => {
  setTimeout(() => {
    preloder1.style.display = "none";

    setTimeout(() => {
      preloder2.style.display = "none";
    }, 5000)
  }, 5000)
})
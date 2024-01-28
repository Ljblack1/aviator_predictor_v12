const moves = ["2.33", "5.67", "1.20", "13.55"];


const loadingBar = document.querySelector('.loading-bar');
const loadingFill = document.querySelector('.loading-bar-fill');
const btn = document.querySelector('.nxt-btn');
const move = document.querySelector('.value');
const pending = document.querySelector('.pending');
const loader = document.querySelector('.loader');

// preloader

const preloder1 = document.querySelector('.preloader');

window.addEventListener('DOMContentLoaded', () => {
  preloder1.style.display = "flex";
})

window.addEventListener('load', () => {
  setTimeout(() => {
    preloder1.style.display = "none";
  }, 5000)
})


window.addEventListener('DOMContentLoaded', () => {
  move.style.display = "none"; 
})


let value = 0;

btn.addEventListener("click", () => {
  btn.textContent = "Next Game";

  value++;

  if (value > moves.length -1) {
    value = 0;
  }
  
  loader.style.transform = `rotate(${1440}deg)`;
  loader.style.transition = `all ${2}s ease`;
  
  loadingFill.style.width = `${0}%`;
  
  setTimeout(() => {
    pending.style.display = "none";
    
    loader.style.transform = `rotate(${0}deg)`;
    loader.style.transition = `all ${0}s ease`;
    
    move.style.display = "block"; 
    
    loadingFill.style.width = `${100}%`;

    move.textContent = `${moves[value]}x`;
  }, 3000);

  // loadingFill.classList.add("hide-fill");
})
let moves = JSON.parse(localStorage.getItem("moves"));


const loadingBar = document.querySelector('.loading-bar');
const loadingFill = document.querySelector('.loading-bar-fill');
const btn = document.querySelector('.nxt-btn');
const pending = document.querySelector('.pending');
const loader = document.querySelector('.loader');
const bgWithSignal = document.querySelector('.bg-section-two');
const sLoader = document.querySelector('.small-load');
const move = document.querySelector('.value');


// working on adding moves
const openMove = document.querySelector('.header');
const moveContainer = document.querySelector('.add-moves-contaner');
const closeMove = document.querySelector('.close-move-btn');
const addMoveBtn = document.querySelector('.add-move-btn');
const moveInputs = document.querySelectorAll('.add-moves-input');

// open move container
openMove.addEventListener('click', () => {
  moveContainer.classList.add('show-move-container');
})
// closing move container
closeMove.addEventListener('click', () => {
  moveContainer.classList.remove('show-move-container');
})

addMoveBtn.addEventListener('click', () => {
  const movesValues = moveInputs;
  moves = [];
  movesValues.forEach((movesValue) => {
    moves.push(movesValue.value);
    movesValue.value = '';
  })
  moveContainer.classList.remove('show-move-container');
  localStorage.setItem("moves", JSON.stringify(moves));
})

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
  
  sLoader.style.display = "flex";

  bgWithSignal.style.transform = `scaleY(${1.2}) translateX(${100}%)`;
  
  setTimeout(() => {
    btn.textContent = "Next Game";
    sLoader.style.display = "none";
    bgWithSignal.style.transform = `scaleY(${1.2}) translateX(${0})`;
  }, 3000)


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

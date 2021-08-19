// import functions and grab DOM elements
import { rockpaperscissor } from './rps.js';
import { didUserWin } from './rps.js';

const goButtonEl = document.getElementById ('pressgo');
const resetButtonEl = document.getElementById ('reset');
const userChoiceEl = document.getElementById('user-Choice');
const compChoiceEl = document.getElementById('computer-Choice');
const winorloseEl = document.getElementById('win-lose');
const winwinEl = document.getElementById ('wins');
const loseloseEl = document.getElementById ('lose');

let wins = 0;
let losses = 0;
goButtonEl.addEventListener('click', () => {
  
    const compChoice = rockpaperscissor();
    const selectorEl = document.querySelector('input:checked');
    
    const winnerwinner = didUserWin (selectorEl, compChoice);

    if (winnerwinner) {
        winorloseEl.textContent = 'Winner Winner, Chicken Dinner!';
    } else {
        winorloseEl.textContent = 'Loser Loser, No good Rhyme!';
    }

    winwinEl.textContent = `Winner: ${wins}`;
    loseloseEl.textContent = `Loser: ${losses}`;

});


resetButtonEl.addEventListener('click', () => {
    location.reload();

  
});
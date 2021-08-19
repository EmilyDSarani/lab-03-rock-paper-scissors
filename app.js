// import functions and grab DOM elements
import { rockpaperscissor } from './rps.js';
import { didUserWin } from './rps.js';

const goButtonEl = document.getElementById ('pressgo');
const resetButtonEl = document.getElementById ('reset');
const winorloseEl = document.getElementById('win-lose');
const winwinEl = document.getElementById ('wins');
const loseloseEl = document.getElementById ('lose');

let wins = 0;
let losses = 0;


goButtonEl.addEventListener('click', () => {
 
    const computerChoice = rockpaperscissor();
    const selectorEl = document.querySelector('input:checked');
    
    const winnerwinner = didUserWin (selectorEl, computerChoice);

    if (winnerwinner) {
        winorloseEl.textContent = 'Winner Winner, Chicken Dinner!';
    } else {
        winorloseEl.textContent = 'Loser Loser, No good Rhyme!';
    }

    winwinEl.textContent = `Winner: ${wins}`;
    loseloseEl.textContent = `Loser: ${losses}`;
    console.log(winnerwinner);
});

resetButtonEl.addEventListener('click', () => {
    location.reload();

  
});
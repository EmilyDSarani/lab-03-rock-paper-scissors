// import functions and grab DOM elements
import { rockpaperscissor } from './rps.js';
import { didUserWin } from './rps.js';

const goButtonEl = document.getElementById ('pressgo');
const resetButtonEl = document.getElementById ('reset');
const winorloseEl = document.getElementById('win-lose');
const winwinEl = document.getElementById ('wins');
const loseloseEl = document.getElementById ('lose');




goButtonEl.addEventListener('click', () => {
    let wins = 0;
    let losses = 0;
    let draws = 0;
  
    const computerChoice = rockpaperscissor();
    const selectorEl = document.querySelector('input:checked');
    
    const winnerwinner = didUserWin (selectorEl, computerChoice);

    if (winnerwinner === 'wins') {
        winorloseEl.textContent = 'Winner Winner, Chicken Dinner!';
    } else if (winnerwinner === 'losses') {
        winorloseEl.textContent = 'Loser Loser, No good Rhyme!';
    }

    winwinEl.textContent = `Winner: ${wins}`;
    loseloseEl.textContent = `Loser: ${losses}`;

    console.log(rockpaperscissor);
});

resetButtonEl.addEventListener('click', () => {
    location.reload();

  
});
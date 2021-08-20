// import functions and grab DOM elements
import { rockpaperscissor } from './rps.js';
import { didUserWin } from './rps.js';

const yourthrow = document.getElementById ('user-choice');
const digitalthrow = document.getElementById ('computer-choice');
const goButtonEl = document.getElementById ('pressgo');
const resetButtonEl = document.getElementById ('reset');
const winorloseEl = document.getElementById('win-lose');
const winwinEl = document.getElementById ('wins');
const loseloseEl = document.getElementById ('lose');
const drawDrawEl = document.getElementById ('draw');

// eslint-disable-next-line no-unused-vars
let draws = 0;
let wins = 0;
let losses = 0;



goButtonEl.addEventListener('click', () => {
   
  
    const computerChoice = rockpaperscissor();
    const selectorEl = document.querySelector('input:checked');
  
    
    const whoWon = didUserWin (computerChoice, selectorEl);

    if (whoWon === 'wins') {
        wins++;
        winorloseEl.textContent = 'Winner Winner, Chicken Dinner!';
    } else if (whoWon === 'losses') {
        losses++;
        winorloseEl.textContent = 'Loser Loser, No good Rhyme!';
    } else if (whoWon === 'draws'){
        draws++;
        winorloseEl.textContent = 'Issa draaaaw';
    }

    winwinEl.textContent = `Winner: ${wins}`;
    loseloseEl.textContent = `Loser: ${losses}`;
    drawDrawEl.textContent = `Draws: ${draws}`;

});

resetButtonEl.addEventListener('click', () => {
    location.reload();

  
});
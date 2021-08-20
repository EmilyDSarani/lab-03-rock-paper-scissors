// import functions and grab DOM elements
import { getComputerThrow } from './rps.js';
import { didUserWin } from './rps.js';

//const yourThrow = document.getElementById ('user-choice');
//const digitalThrow = document.getElementById ('computer-choice');
const goButtonEl = document.getElementById ('press-go');
const resetButtonEl = document.getElementById ('reset');
const winOrLoseEl = document.getElementById('win-lose');
const winWinEl = document.getElementById ('wins');
const loseLoseEl = document.getElementById ('lose');
const drawDrawEl = document.getElementById ('draw');

// eslint-disable-next-line no-unused-vars
let draws = 0;
let wins = 0;
let losses = 0;



goButtonEl.addEventListener('click', () => {
   
  
    const computerChoice = getComputerThrow();
    const selectorEl = document.querySelector('input:checked');
  
    
    const whoWon = didUserWin(selectorEl.value, computerChoice);

    if (whoWon === 'wins') {
        wins++;
        winOrLoseEl.textContent = 'Winner Winner, Chicken Dinner!';
    } else if (whoWon === 'losses') {
        losses++;
        winOrLoseEl.textContent = 'Loser Loser, No good Rhyme!';
    } else if (whoWon === 'draws'){
        draws++;
        winOrLoseEl.textContent = 'Issa draaaaw';
    }
    
    winWinEl.textContent = `Winner: ${wins}`;
    loseLoseEl.textContent = `Loser: ${losses}`;
    drawDrawEl.textContent = `Draws: ${draws}`;

});

resetButtonEl.addEventListener('click', () => {
    location.reload();

  
});
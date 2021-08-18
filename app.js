// import functions and grab DOM elements
import { RPS } from './rps.js';

const goButtonEl = document.getElementById ('pressgo');
const resetButtonEl = document.getElementById ('reset');
const userChoiceEl = document.getElementById('user-Choice');
const computerChoiceEl = document.getElementById('computer-Choice');
const winorloseEl = document.getElementById('win-lose');
const winwinEl = document.getElementById ('wins');
const loseloseEl = document.getElementById ('losses');

let wins = 0;
let losses = 0;
let computerToss = null;

goButtonEl.addEventListener('click',() => {
    const threeThrow = RPS();

}

)

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

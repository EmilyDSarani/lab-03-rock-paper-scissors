
export function getComputerThrow() {
    const randomNumber = (Math.floor(Math.random() * 3));
    
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
}

export function didUserWin(userThrow, computerThrow) {
    
    if (userThrow === computerThrow) {
        return 'draws';}
    if ((userThrow === 'paper' && computerThrow === 'rock') 
|| (userThrow === 'rock' && computerThrow === 'scissors') 
|| (userThrow === 'scissors' && computerThrow === 'paper'))
    { return 'wins';  
    } 
    else { 
        return 'losses';
    }
}
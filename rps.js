
export function rockpaperscissor(){
    const compHand = Math.round(Math.random() * 2);
    if (compHand === 0) return 'rock';
    if (compHand === 1) return 'paper';
    if (compHand === 2) return 'scissors';
    
}

export function didUserWin(userThrow, actualThrow) {
    if (userThrow === actualThrow) {
        return 'draw';}
    if ((userThrow === 'paper' && actualThrow === 'rock') || (userThrow === 'rock' && actualThrow === 'scissors') || (userThrow === 'scissors' && actualThrow === 'paper'))
    { return 'winner';  
     
    } else { return 'LOSER';}
}
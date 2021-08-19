const sideArray = ['rock', 'paper', 'scissors'];

export function rockpaperscissor(){

    const compHand = Math.round(Math.random() * 2);
    return sideArray[compHand];
    
}

export function didUserWin(userThrow, actualThrow) {

    if (userThrow === 'rock' && actualThrow === 'paper'){
        return actualThrow; 
    } else if (userThrow === 'paper' && actualThrow === 'rock'){
        return userThrow;
    } else if (userThrow === 'rock' && actualThrow === 'scissors'){
        return userThrow;
    } if (userThrow === 'scissors' && actualThrow === 'rock'){
        return actualThrow; 
    } else if (userThrow === 'paper' && actualThrow === 'scissors'){
        return actualThrow;
    } else if (userThrow === 'scissors' && actualThrow === 'paper'){
        return userThrow;
    } else {
        return userThrow === actualThrow;
    }
}
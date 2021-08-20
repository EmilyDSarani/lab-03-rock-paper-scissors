
export function rockpaperscissor() {
    const randomNumber = (Math.floor(Math.random() * 3));
    return didUserWin(randomNumber);

}

export function didUserWin(userNum) {
    if (userNum === 0) {
        return 'rock';
    } else if (userNum === 1) {
        return 'paper';
    } else if (userNum === 2) {
        return 'scissors';
    }
}

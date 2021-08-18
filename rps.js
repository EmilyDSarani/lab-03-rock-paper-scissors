export function rockpaperscissor(){

    const compHand = Math.round(Math.random() * 2); 
    if(compHand === 0){
        return 'rock';
    } else if(compuHand === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}
function get_computer_choice() {
    const option = ['ROCK', 'PAPER', 'SCISSORS'];
    return option[Math.round(Math.random() * (option.length - 1))];
}


function player_choice() {
    let choice = null; 
    do {
         choice = prompt('Pick!');
         choice = choice.toUpperCase();
    } while (!(choice === 'ROCK' || choice === 'SCISSORS' || choice === 'PAPER'));
    return choice;
}

function decide_winner(comp,player) {
    console.log(player);
    console.log(comp);
    switch (player) {
        case 'ROCK':
            if ( comp === 'SCISSORS')
            {
                console.log("Youre the winner!!");
            }
            else if (comp === 'PAPER') {
                console.log("Computer wins!!");
            }
            else{
                console.log("Tie!!");
            }
            break;
        case 'PAPER':
            if (comp === 'ROCK')
            {
                console.log("Youre the winner!!");
            }
            else if (comp === 'SCISSORS') {
                console.log("Computer wins!!");
            }
            else{
                console.log("Tie!!");
            }
            break;
        case 'SCISSORS':
            if (comp === 'PAPER')
            {
                console.log("Youre the winner!!");
            }
            else if (comp === 'ROCK') {
                console.log("Computer wins!!");
            }
            else{
                console.log("Tie!!");
            }
            break;
        default:
            
            break;
    }

}

decide_winner(get_computer_choice(),player_choice());
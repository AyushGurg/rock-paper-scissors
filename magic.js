
const WIN = 5;
let playerChoices = document.querySelectorAll("button");
let chosen = "";

let usrScore = 0;
let compScore = 0;

let winner;
let result = document.querySelector(".result");

function getComputerChoice() {
    const option = ['ROCK', 'PAPER', 'SCISSORS'];
    return option[Math.round(Math.random() * (option.length - 1))];
}


function playRound(usrChoice,compChoice) {
    switch (usrChoice) {
        case 'ROCK':
            if ( compChoice === 'SCISSORS')
            {
                result.textContent = "Player Chose Rock, Computer Chose Scissors"
                console.log("Youre the winner!!");
                usrScore++;
                winner = document.querySelector("#usrScore");
                winner.textContent = usrScore;
            }
            else if (compChoice === 'PAPER') {
                result.textContent = "Player Chose Rock, Computer Chose Paper."
                console.log("Computer wins!!");
                compScore++;
                winner = document.querySelector("#compScore");
                winner.textContent = compScore;
            }
            else{
                console.log("Tie!!");
                result.textContent = "Tie";
            }
            break;
        case 'PAPER':
            if (compChoice === 'ROCK')
            {
                result.textContent = "Player Chose Paper, Computer Chose Rock."
                console.log("Youre the winner!!");
                usrScore++;
                winner = document.querySelector("#usrScore");
                winner.textContent = usrScore;
            }
            else if (compChoice === 'SCISSORS') {
                result.textContent = "Player Chose Paper, Computer Chose Scissors."
                console.log("Computer wins!!");
                compScore++;
                winner = document.querySelector("#compScore");
                winner.textContent = compScore;
            }
            else{
                console.log("Tie!!");
                result.textContent = "Tie";
            }
            break;
        case 'SCISSORS':
            if (compChoice === 'PAPER')
            {
                result.textContent = "Player Chose Scissors, Computer Chose Paper."
                console.log("Youre the winner!!");
                usrScore++;
                winner = document.querySelector("#usrScore");
                winner.textContent = usrScore;
            }
            else if (compChoice === 'ROCK') {
                result.textContent = "Player Chose Scissors, Computer Chose Rock."
                console.log("Computer wins!!");
                compScore++;
                winner = document.querySelector("#compScore");
                winner.textContent = compScore;
            }
            else{
                console.log("Tie!!");
                result.textContent = "Tie";
            }
            break;
        default:          
            break;
    }
}


playerChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
        chosen = choice.id;
        if (usrScore < WIN && compScore < WIN) {
            playRound(chosen,getComputerChoice());        
        }
        else {
            if (usrScore == WIN) {
                result.textContent = " Player wins!!";
            }
            else {
                result.textContent = " Computer wins :c";
            }
        }
        
    });
});



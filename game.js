// Create a playerScore and computerScore
let playerScore = 0;
let computerScore = 0;

// function that randomly return rock, paper, or scissors
function getComputerChoice() {
    let playNumber = Math.floor(Math.random() *3);
    if (playNumber == 0) {
        return "rock"
    } else if (playNumber == 1) {
        return "paper"
    } else if (playNumber == 2) {
        return "scissors"
    };
};

//rounds
function playRound(computerSelection, playerSelection) {

    //player selection
    if (playerSelection == computerSelection) {
        return "tie"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++
        return "player wins"
        
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++
        return "player wins"
        
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        return "player wins"
        
    }

    //computer selection
    else {
        computerScore++
        return "computer wins"
        
    }
};


//game
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose between rock, paper or scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("player score =", playerScore, "computer score", computerScore);
    }
}
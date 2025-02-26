const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    let result;
    switch (num) {
        case 0:
            result = ROCK;
            break;
        case 1:
            result = PAPER;
            break;
        default:
            result = SCISSORS;
    }
    return result;
}

function getHumanChoice() {
    let choice = window.prompt("Enter decision: rock, paper, or scissors", "rock");
    return choice.toLowerCase();
}


function encodeChoice(choice) {
    switch(choice) {
        case ROCK:
            return 0;
        case PAPER:
            return 1;
        default:
            return 2
    }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound() {
        let compChoice = getComputerChoice();
        let userChoice = getHumanChoice();
        let userEncoded = encodeChoice(userChoice);
        let compEncoded = encodeChoice(compChoice);
        if (userEncoded === compEncoded) {
            console.log(`Tie! Both selected ${compChoice}`)
        } else if (userEncoded + 1 === compEncoded || userEncoded % 2 === compEncoded) {
            computerScore += 1;
            console.log(`Round loss! ${compChoice} beats ${userChoice}`);
        } else {
            humanScore += 1;
            console.log(`Round won! ${userChoice} beats ${compChoice}`);
        }
        console.log(`User Score: ${humanScore}`);
        console.log(`CPU Score: ${computerScore}`);
    }
    const numRounds = 5;
    for(let i = 0; i < numRounds; i++) {
        playRound();
    }
    if (humanScore > computerScore) {
        console.log("Congrats you beat the CPU!");
    } else if (computerScore < humanScore)  {
        console.log("Better luck nect time.");
    } else {
        console.log("Tie game.")
    }
}

playGame();

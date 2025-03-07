const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const SCORE_TO_WIN = 5;
let humanScore = 0;
let computerScore = 0;

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


let buttons = document.querySelectorAll("button")
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        playRound(e.target.value);
    })
})

let roundResultDiv = document.querySelector(".round-results");

function determineWinner(para) {
    if (computerScore == SCORE_TO_WIN) {
        para.textContent = "CPU Wins!";
        computerScore = 0;
        humanScore = 0;
    } else if (humanScore == SCORE_TO_WIN) {
        para.textContent = "User wins!"
        computerScore = 0;
        humanScore = 0;
    } else {
        para.textContent = "";
    }
}

function playRound(playerSelection) {
    let compChoice = getComputerChoice();
    let userChoice = playerSelection
    let userEncoded = encodeChoice(userChoice);
    let compEncoded = encodeChoice(compChoice);
    let winnerPara = roundResultDiv.firstChild;
    if (userEncoded === compEncoded) {
        winnerPara.textContent = `Tie! Both selected ${compChoice}`;
    } else if (userEncoded + 1 === compEncoded || userEncoded % 2 === compEncoded) {
        computerScore += 1;
        winnerPara.textContent = `Round loss! ${compChoice} beats ${userChoice}`;
    } else {
        humanScore += 1;
        winnerPara.textContent = `Round won! ${userChoice} beats ${compChoice}`;
    }
    let userScorePara = winnerPara.nextSibling;
    let compScorePara = userScorePara.nextSibling;

    userScorePara.textContent = `User Score: ${humanScore}`;
    compScorePara.textContent = `CPU Score: ${computerScore}`;

    determineWinner(compScorePara.nextSibling);

}

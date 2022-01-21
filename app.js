const playerChoiceDisplay = document.getElementById('us-choice')
const compChoiceDisplay = document.getElementById('them-choice')
const outcomeDisplay = document.getElementById('outcome')
const options = document.querySelectorAll('button')
const choices = ['rock', 'paper', 'scissors']
const playerScoreDisplay = document.getElementById('us-score')
const compScoreDisplay = document.getElementById('them-score')
let playerSelection
let computerSelection
let result
let playerScore = 0
let computerScore = 0

options.forEach(button => button.addEventListener('click', (e) => {
    playerSelection = e.target.id
    playerChoiceDisplay.textContent = playerSelection
    computerPlay()
    playRound()
}))

function computerPlay() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    if (randomChoice === 'rock') {
        computerSelection = 'rock'
    }
    if (randomChoice === 'paper') {
        computerSelection = 'paper'
    }
    if (randomChoice === 'scissors') {
        computerSelection = 'scissors'
    }
    compChoiceDisplay.textContent = computerSelection
}

function playRound() {
    if (playerSelection === computerSelection) {
        result = "It's a Tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
       result = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    outcomeDisplay.textContent = result
    playerScoreDisplay.textContent = playerScore
    compScoreDisplay.textContent = computerScore
}
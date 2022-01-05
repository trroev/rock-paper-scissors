// Function allowing computer to generate a random selection
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

//Setting the score at 0 to begin the game
let playerScore = 0;
let computerScore = 0;

// Function to play a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie!"
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}

// Function to play a 5 round game that keeps score and reports a winner/loser at the end
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose one! Rock, Paper, or Scissors')
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
        console.log(`Congrats! You win with a score of ${playerScore}-${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`Bummer! You have been defeated, ${computerScore}-${playerScore}!`)
    } else {
        console.log("It's a draw!")
    }
}

game();
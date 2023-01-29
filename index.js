function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let theChoice = options[Math.floor(Math.random() * 3)];
    return theChoice
}

const playerSelection = 'RoCk';
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock') {
        return ("Draw");
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        return ("You Win")
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        return ("You Lose")
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'paper') {
        return ("Draw");
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        return ("You Win")
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        return ("You Lose")
    }
    else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'scissors') {
        return ("Draw");
    }
    else if (playerSelection.toLowerCase() === 'scissors' && (computerSelection.toLowerCase() === 'paper')) {
        return ("You Win")
    }
    else if (playerSelection.toLowerCase() === 'scissors' && (computerSelection.toLowerCase() === 'rock')) {
        return ("You Lose")
    }
}


console.log(playRound(playerSelection, computerSelection));
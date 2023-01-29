function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let theChoice = options[Math.floor(Math.random() * 3)];
    return theChoice
}

function playRound(playerSelection, computerSelection, countHuman, countPc) {
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


function game() {
    let countPc = 0;
    let countHuman = 0;

    for (let i = 0; i < 5; i++) {
        
        const playerSelection = prompt("What's your choice for this round ?")
        const computerSelection = getComputerChoice();

        if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock') {
             
        }
        else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
            countHuman++;
        }
        else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
            countPc++;
        }
        else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'paper') {
            
        }
        else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
            countHuman++;
        }
        else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
            countPc++;
        }
        else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'scissors') {
            
        }
        else if (playerSelection.toLowerCase() === 'scissors' && (computerSelection.toLowerCase() === 'paper')) {
            countHuman++;
        }
        else if (playerSelection.toLowerCase() === 'scissors' && (computerSelection.toLowerCase() === 'rock')) {
             countPc++;
        }

        
        console.log(playRound(playerSelection, computerSelection), `Round ${i+1}`);
     }
     
     if (countPc > countHuman) {
        console.log("Computer Wins.");
     } else if (countHuman > countPc) {
        console.log("Human Wins.")
     } else console.log("Draw.");
}

game();
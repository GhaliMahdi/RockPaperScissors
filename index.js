function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let theChoice = options[Math.floor(Math.random() * 3)];
    console.log(theChoice)
}

getComputerChoice()
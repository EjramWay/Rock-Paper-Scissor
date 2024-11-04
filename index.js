let winElement = document.getElementById('win');
let lossElement = document.getElementById('loss');
let tiedElement = document.getElementById('tied');

let winCount = 0; 
let lossCount = 0;
let tiedCount = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");

rockButton.onclick = function() {
    gameChoice('rock');
}

paperButton.onclick = function() {
    gameChoice('paper');
}

scissorButton.onclick = function() {
    gameChoice('scissor');
}

function gameChoice(playerChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * choices.length);
    const compChoice = choices[random];

    if (playerChoice === compChoice) {  
        tiedCount++;
        tiedElement.value = `Tied: ${tiedCount}`; 
        console.log(`Tied: ${tiedCount}`);
    } else if (
        (playerChoice === 'rock' && compChoice === 'scissor') || 
        (playerChoice === 'scissor' && compChoice === 'paper') || 
        (playerChoice === 'paper' && compChoice === 'rock')
    ) {
        winCount++;
        winElement.value = `Win: ${winCount}`; 
        console.log(`Win: ${winCount}`);
    } else {
        lossCount++;
        lossElement.value = `Loss: ${lossCount}`;
        console.log(`Loss: ${lossCount}`);
    }
}

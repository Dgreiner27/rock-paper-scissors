//These are all of the utility functions to 
//return the correct winning or losing message

function playerWins(player, computer){
    let response = `Woohoo, ${player} beats ${computer}! You win!`;
    console.log(response);
    return true;
}
function playerLoses(player, computer){
    let response = `Aw shucks, ${computer} beats ${player}, the computer won!`;
    console.log(response);
    return false;
}
function tieGame(){
    let response = "It's a draw!";
    console.log(response);
    return response;
}
function incorrectInput(){
    let response = "This game is not that hard. Try again!";
    console.log(response);
    return response;
}
function cancelled(){
    let response="Goodbye!";
    console.log(response);
    return response;
}
//Randomizer function and single round function

function computerPlay() {
    let random=Math.random();
    let compAnswer = ["rock", "paper", "scissors"];

    if(random <=0.33){
        return compAnswer[0];
    } else if(random <=0.66){
        return compAnswer[1];
    } else return compAnswer[2];
}
function playRound(playerSelection, computerSelection){
    playerSelection=prompt("Let\'s play rock, paper scissors!");
    computerSelection=computerPlay();
    
    if(playerSelection===null){
        return cancelled();
    } else if(playerSelection.toLowerCase()===computerSelection){
        return tieGame();
    } else if (playerSelection.toLowerCase()==="rock"){
        if(computerSelection==="paper"){
            return playerLoses(playerSelection, computerSelection);
        } else return playerWins(playerSelection, computerSelection);
    } else if(playerSelection.toLowerCase()==="paper"){
        if(computerSelection==="rock"){
            return playerWins(playerSelection, computerSelection);
        } else return playerLoses(playerSelection, computerSelection);
    } else if(playerSelection.toLowerCase()==="scissors"){
        if(computerSelection==="rock"){
            return playerLoses(playerSelection, computerSelection);
        } else return playerWins(playerSelection, computerSelection);
    } else return incorrectInput();
}


//Only gives player points
//Need to troubleshoot
//Need to change end of game to also declare a winner!


function game(){
    let computerScore=0;
    let playerScore=0;

    for(let i=0; i<5; i++){
        
        playRound();
        if (true){
            playerScore++;
        } else if(false){
            computerScore++;
        } else console.log('I need to fix this code');
    }
    console.log(`Computer has ${computerScore} points. Player has ${playerScore} points.`);
}

game();
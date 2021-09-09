//These are all of the utility functions to 
//return the correct winning or losing message

let gameResults;

function playerWins(player, computer){

    results.textContent = `Woohoo, ${player} beats ${computer}! You win!`;
    let response = `Woohoo, ${player} beats ${computer}! You win!`;
    console.log(response);
    gameResults=1;
    return gameResults;
}
function playerLoses(player, computer){
    results.textContent = `Aw shucks, ${computer} beats ${player}, the computer won!`;
    let response = `Aw shucks, ${computer} beats ${player}, the computer won!`;
    console.log(response);
    gameResults=0;
    return gameResults;
}
function tieGame(){
    results.textContent = "It's a draw!";
    let response = "It's a draw!";
    console.log(response);
    gameResults=2;
    return gameResults;
}
function incorrectInput(){
    results.textContent = "This game is not that hard. Try again!";
    let response = "This game is not that hard. Try again!";
    console.log(response);
    gameResults=3;
    return gameResults;
}
function cancelled(){
    results.textContent = "Goodbye!";
    let response = "Goodbye!";
    console.log(response);
    gameResults=4;
    return gameResults;
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
function playRound(playerSelection){

    
    let computerSelection=computerPlay();


  
    
    
    if(playerSelection===null){
        return cancelled();
    } else if(playerSelection===computerSelection){
        return tieGame();
    } else if (playerSelection==="rock"){
        if(computerSelection==="paper"){
            return playerLoses(playerSelection, computerSelection);
        } else return playerWins(playerSelection, computerSelection);
    } else if(playerSelection==="paper"){
        if(computerSelection==="rock"){
            return playerWins(playerSelection, computerSelection);
        } else return playerLoses(playerSelection, computerSelection);
    } else if(playerSelection==="scissors"){
        if(computerSelection==="rock"){
            return playerLoses(playerSelection, computerSelection);
        } else return playerWins(playerSelection, computerSelection);
    } else return incorrectInput();
}


//UI FUNCTIONALITY


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const playerPoints = document.querySelector('#playerPoints');
const computerPoints = document.querySelector('#computerPoints');



function game(){
    let computerScore=0;
    let playerScore=0;
    let emptyResults=0;

    rock.addEventListener('click', () => {
        playRound("rock");
    });
  
    scissors.addEventListener('click', () => {
        playRound("scissors");
    });

    paper.addEventListener('click', () => {
        playRound("paper");
    });

    for(let i = 0; i <5; i++){

        playerPoints.textContent = `Player: ${playerScore}`;
        computerPoints.textContent = `Computer: ${computerScore}`;

        playRound();
        if (gameResults===1){
            playerScore++;
        } else if(gameResults===0){
            computerScore++;
        } else emptyResults++;
    }
}

game();




















//THIS IS THE ORIGINAL LOGIC THAT PLAYS 5 GAMES IN THE CONSOLE.
//REMOVING TO START ADDING IN A UI
//
//
//
/*
// plays 5 rounds and keeps track of points!


function game(){
    let computerScore=0;
    let playerScore=0;
    let emptyResults=0;

    for(let i=0; i<5; i++){
        
        playRound();
        if (gameResults===1){
            playerScore++;
        } else if(gameResults===0){
            computerScore++;
        } else emptyResults++;
    }

    if (playerScore === computerScore){
        console.log(`Computer has ${computerScore} points. Player has ${playerScore} points. It\'s a tie!`);
    } else if (playerScore < computerScore){
        console.log(`Computer has ${computerScore} points. Player has ${playerScore} points. Better luck next time, computer wins`);
    } else console.log(`Computer has ${computerScore} points. Player has ${playerScore} points. You win!!!!!!`);
    
}

game();

*/
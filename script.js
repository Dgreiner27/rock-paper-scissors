function computerPlay() {
    let random=Math.random();
    console.log(random);
    let compAnswer = ["rock", "paper", "scissors"];

    if(random <=0.33){
        return compAnswer[0];
    } else if(random <=0.66){
        return compAnswer[1];
    } else return compAnswer[2];
}

function playerWins(){
    let response = "You win!";
    console.log(response);
    return response;
}

function playerLoses(){
    let response = "Aw shucks, the computer won!";
    console.log(response);
    return response;
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

function singleGame(playerSelection, computerSelection){
    playerSelection=prompt("Let\'s play rock, paper scissors!");
    computerSelection=computerPlay();
    console.log(playerSelection);
    if(playerSelection.toLowerCase()===computerSelection){
        return tieGame();
    } else if (playerSelection.toLowerCase()==="rock"){
        if(computerSelection==="paper"){
            return playerLoses();
        } else return playerWins();
    } else if(playerSelection.toLowerCase()==="paper"){
        if(computerSelection==="rock"){
            return playerWins();
        } else return playerLoses();
    } else if(playerSelection.toLowerCase()==="scissors"){
        if(computerSelection==="rock"){
            return playerLoses();
        } else return playerWins();
    } else return incorrectInput();
}

singleGame();
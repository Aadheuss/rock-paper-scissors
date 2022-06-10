//ask for player input
//a player play against computer
//computer randomly return either 'Rock', 'Paper'. or 'Scissors'
function computerPlay() {
  let handSelection = ['rock', 'paper', 'scissors'];
  return handSelection[Math.floor(Math.random()*handSelection.length)];
};

let computerSelection = computerPlay();
//return random selection between rock, paper, or scissors.
function playerChoice(string) {
  string = string.toLowerCase();
//let the player choose between three selection
  if (string == 'rock') {
    return rock;
  }else if (string == 'paper') {
    return paper;
  }else if (string == 'scissors') {
    return scissors;
  }else {
    return 'No selection is chosen';
  }
}
//make player selection between Rock, Paper, or scissors
function singleRound(playerSelection, computerSelection) {
//rock beats paper
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();
  if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
    return 'You Lose! Scissors beats Paper';
  }else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
    return 'You Lose! Rock beats Scissors';
  }else if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
    return 'You Lose! Paper beats rock';
  }else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
    return 'You Win! Scissors beats Paper';
  }else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
    return 'You Win! Paper beats Scissors';
  }else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
    return 'You Win! Rock beats Scissors';
  }else if ((playerSelection == 'rock') && (computerSelection == 'rock') || 
             (playerSelection == 'paper') && (computerSelection == 'paper') ||
             (playerSelection == 'scissors') && (computerSelection == 'scissors')) {
    return 'It\'s a draw!';
  }else {
    return 'You haven\'t chosen your hand!';
  }
/*'rock' > 'scissors' == true;
'paper' > 'rock' == true;
'scissors' > 'paper' == true;*/

}
//play a single round of Rock Paper Scissors
//make the selection case-insensitive
//declare the winner of the round when it finished
//play 5 round of game and keep score
//report a winner
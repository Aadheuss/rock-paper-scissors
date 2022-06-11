//a player play against computer
let playerScore = 0;
let computerScore = 0;
//score variable track the starting score point
function computerPlay() {
  let handSelection = ['rock', 'paper', 'scissors'];
  return handSelection[Math.floor(Math.random()*handSelection.length)];
};
//computer randomly return either 'Rock', 'Paper'. or 'Scissors'
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

function singleRound(playerSelection, computerSelection) {
  playerSelection = prompt ('Choose your hand!', '');
//ask for player input
//make player selection between Rock, Paper, or scissors
  playerSelection = playerSelection.toString();
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();
  if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
    return 'You Lose! Scissors beats Paper, your Score is' + ' ' + playerScore + ' ' + 'your opponent\'s score is' + 
    ' ' + (computerScore += 1);
  }else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
    return 'You Lose! Rock beats Scissors, your Score is' + ' ' + playerScore + ' ' + 'your opponent\'s score is' + 
    ' ' + (computerScore += 1);
  }else if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
    return 'You Lose! Paper beats rock, your Score is' + ' ' + playerScore + ' ' + 'your opponent\'s score is' + 
    ' ' + (computerScore += 1);
  }else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
    return 'You Win! Scissors beats Paper, your Score is' + ' ' + (playerScore += 1) + ' ' + 'your opponent\'s score is' 
    + ' ' + computerScore;
  }else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
    return 'You Win! Paper beats Scissors, your Score is' + ' ' + (playerScore += 1) + ' ' + 'your opponent\'s score is' 
    + ' ' + computerScore;
  }else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
    return 'You Win! Rock beats Scissors, your Score is' + ' ' + (playerScore += 1) + ' ' + 'your opponent\'s score is' 
    + ' ' + computerScore;
  }else if ((playerSelection == 'rock') && (computerSelection == 'rock') || 
             (playerSelection == 'paper') && (computerSelection == 'paper') ||
             (playerSelection == 'scissors') && (computerSelection == 'scissors')) {
    return 'It\'s a draw!, your Score is' + ' ' + playerScore + ' ' + 'your opponent\'s score is' + 
    ' ' + computerScore;
  }else {
    return 'You haven\'t chosen your hand!';
  }
//rock' > 'scissors' == true;
//'paper' > 'rock' == true;
//'scissors' > 'paper' == true;

}
//play a single round of Rock Paper Scissors
//make the selection case-insensitive
//declare the winner of the round when it finished
function game() {
  for (let i = 0; i < 5; i++) {
    let result = singleRound();
    console.log(result);
    console.log(playerScore > computerScore);
//call the playRound function
//play 5 round of game and keep score
    if (i == 4) {
      if (playerScore > computerScore) {
      return ('Congratulations!! You Win!');
      }else if (playerScore == computerScore) {
      return ('It\'s a Draw! Better luck next time!');
      }else {
      return('You Lose! The Computer will rule over the World!');
      }
    }   
  }
}
//report a winner or loser at the end

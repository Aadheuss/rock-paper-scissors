const selectionButtons = document.querySelectorAll(`[data-selection]`);
const finalColumn = document.querySelector(`[data-final-column]`);
const computerScore = document.querySelector(`[data-computer-score]`)
const playerScore = document.querySelector(`[data-player-score]`);
const pButtons = document.querySelectorAll(`button.selection`);
const round = document.querySelector('.round');
const popUp = document.querySelector('.pop-up');
const SELECTIONS = [
  {
    name: 'rock',
    beats: 'scissors'
  },
  {
    name: 'scissors',
    beats: 'paper'
  },
  {
    name: 'paper',
    beats: 'rock'
  }
];

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('chosen', 'pick', 'click-me');
}

const buttons = Array.from(document.querySelectorAll('button'));
  buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
//remove the border change

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
};

pButtons.forEach(button => button.addEventListener('click', () => {
  const cButton = document.querySelector(`.${button.className}`);
  button.classList.add('pick');
}))

//computer's random selection
selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})
//return the value of player selection
function showRound(pScore, cScore) {
  pScore = parseInt(pScore.innerText);
  cScore = parseInt(cScore.innerText);
  const showWin = document.querySelector('.round div');
  if (pScore === 5 || cScore === 5) {
    showWin.classList.add('show-win');
    if (pScore > cScore) {
    showWin.innerText = 'You Win! It\'s your lucky day!';
    showWin.style.cssText = "border-color: #01016f; color: #01016f;";

    } else {
    showWin.innerText = 'Computer win! better luck next time!';
    showWin.style.cssText = "border-color: #d8031c; color: #d8031c;";
  }
  round.appendChild(showWin);
  resetButton(showWin);
  }
}

function resetButton(toReset) {
  popUp.innerText = 'Do you want to play again?'
  round.appendChild(popUp);
  const rButton = document.createElement('button');
  rButton.classList.add('r-button');
  rButton.innerText = 'Play again';
  popUp.appendChild(rButton);
  const clickMe = document.querySelector('.r-button');
  clickMe.addEventListener('click', () => clickMe.classList.add('click-me'));
  clickMe.addEventListener('transitionend', removeTransition);
  resetScore(clickMe,popUp,toReset);
}  
//create a reset button and reset score if the player click the button 
function resetScore(click, elOne, elTwo) {
  click.addEventListener('click', () => {
  playerScore.innerText = 0
  computerScore.innerText = 0;
  click.remove();
  elOne.remove();
  elTwo.remove();
  }) 
}
//Reset score
function makeSelection(selection) {
  const computerSelection = randomSelection();
  changeColor(computerSelection);
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  addSelectionResult(computerWinner);
  addSelectionResult(yourWinner); 
  if (yourWinner) incrementScore(playerScore);
  if (computerWinner) incrementScore(computerScore);
//add player's score
  showRound(playerScore, computerScore);
//add computer's score
}

function incrementScore(score) {
  score.innerText = parseInt(score.innerText) + 1; 
}
//add score by one for each win
function addSelectionResult(winner) {
  const div = document.createElement('div');
  if (winner) div.classList.add('winner');
}
//Track the result for the round

function changeColor(changeMe) {
  changeMe = `.${changeMe.name}` ;
  const cButton = document.querySelector(changeMe);
  cButton.classList.add('chosen');
  }
//if the button is chosen change the color of the button by adding class

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name; 
}

//for loop will track score and stop the game after either player reached five and ask to play another round
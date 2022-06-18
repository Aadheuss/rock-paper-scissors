const selectionButtons = document.querySelectorAll(`[data-selection]`);
const finalColumn = document.querySelector(`[data-final-column]`);
const computerScore = document.querySelector(`[data-computer-score]`)
const playerScore = document.querySelector(`[data-player-score]`);
const pButtons = document.querySelectorAll(`button.selection`);
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
  e.target.classList.remove('chosen', 'pick');
}

const buttons = Array.from(document.querySelectorAll('button'));
  buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
//remove the border change
function incrementScore(score) {
  score.innerText = parseInt(score.innerText) + 1; 
}
//keep track of the score
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

function makeSelection(selection) {
  const computerSelection = randomSelection();
  changeColor(computerSelection);
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);

  if (yourWinner) incrementScore(playerScore);
  if (computerWinner) incrementScore(computerScore);
}

function changeColor(changeMe) {
//make a function that will change the button color if it's selected
//if the button is chosen change the color of the button
  changeMe = `.${changeMe.name}` ;
  const cButton = document.querySelector(changeMe);
  cButton.classList.add('chosen');
  }
//change the border color by adding class
function addSelectionResult(selection, winner) {
  const div = document.createElement('div');
  div.innerText = selection.name;
  div.classList.add('result-selection');
  if (winner) div.classList.add('winner');
  finalColumn.after(div);
}
//Track the result for the round

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name; 
}

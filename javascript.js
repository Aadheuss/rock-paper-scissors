const selectionButtons = document.querySelectorAll(`[data-selection]`);
const finalColumn = document.querySelector(`[data-final-column]`);
const computerScore = document.querySelector(`[data-computer-score]`)
const playerScore = document.querySelector(`[data-player-score]`);
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

function incrementScore(score) {
  score.innerText = parseInt(score.innerText) + 1; 
}
function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
};

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);

  if (yourWinner) incrementScore(playerScore);
  if (computerWinner) incrementScore(computerScore);
}

function addSelectionResult(selection, winner) {
  const div = document.createElement('div');
  div.innerText = selection.name;
  div.classList.add('result-selection');
  if (winner) div.classList.add('winner');
  finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name; 
}

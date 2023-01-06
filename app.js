const computerChoiceDisplay = document.getElementById('computer-choice') 
const userChoiceDisplay = document.getElementById('user-choice') 
const resultDisplay = document.getElementById('result') 
const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
}))
// Generate a random # for the computer's choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1

  if(randomNumber === 1) {
    computerChoice = 'rock'
  } else if (randomNumber === 2) {
    computerChoice = 'paper'
  } else {
    computerChoice = 'scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice 
}

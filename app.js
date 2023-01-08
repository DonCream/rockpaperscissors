const computerChoiceDisplay = document.getElementById('computer-choice') 
const userChoiceDisplay = document.getElementById('user-choice') 
const resultDisplay = document.getElementById('result') 
const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  //Use the function generateComputerChoice to display the computers random calculation for rock, paper or scissors
  generateComputerChoice()
  //Use the function getResult to display the button you clicked (rock, paper or scissors
  getResult()
}))

// function that generates a random # for the computer's choice
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
//function that shows the results of computerChoice and userChoice functions to determine the winner of the game
function getResult() {
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'You Win!'
  } else if (computerChoice === 'rock' && userChoice === 'scissors' ) {
    result = 'You Lost!'
  } else if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'You Win!'
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'You Lose!'
  } else if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'You Win!'
  } else if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'You Lose!'
  } else{(computerChoice === userChoice) 
    result = 'It\'s a Draw'
  }  
  resultDisplay.innerHTML = result
}

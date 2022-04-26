const containerGame = document.querySelector('.container');
const messeage = document.querySelector('#guessLetter');
const keysGuessed = document.querySelector('#keysGuessed');
const h2keysGuessed = document.querySelector('h2')
const boxRightLetter = document.querySelector('.boxLetter');
const buttonNewGame = document.querySelector('button');
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter)

function guessMyLetter(event) {
  const userLetter = event.key.toUpperCase();

  // rest message (wrong letter)
  messeage.innerText = "nope, wrong letter";
  messeage.style.color = 'red';

  // right Letterr (game over)
  if (userLetter === randomLetter) {
    messeage.innerText = 'Right Letter';
    messeage.style.color = 'green';
    boxRightLetter.innerText = userLetter;
    h2keysGuessed.innerText = 'Would you like to play again?';
    keysGuessed.remove();
    buttonNewGame.style.display = 'block'
    window.removeEventListener('keypress', guessMyLetter)
  }

  // check if user enter only letters (A - Z)
  if (letters.includes(userLetter)) {
    // check if user enter letter has not already been guessed
    if(!keysGuessed.innerText.includes(userLetter)) {
      keysGuessed.innerText += `${userLetter},`;

    }
    else {
      messeage.innerText = `${userLetter} has already been guessed!`;
      messeage.style.color = 'red';

    }
  }
  else {
    messeage.innerText = `please enter only letters (A - Z)`;
    messeage.style.color = 'red';
  }
}

// event Listener for Keypress
window.addEventListener('keypress', guessMyLetter);

// event Listener for Click (New Game)
buttonNewGame.addEventListener('click', () => {
  window.location.reload();
})
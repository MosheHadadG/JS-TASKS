const player1 = document.querySelector('#player1-race');
const player2 = document.querySelector('#player2-race');
const whoWinH2 = document.querySelector('h2');
const btnNewGame = document.querySelector('button');

function currPositionPlayer1() {
  for (position of player1.children) {
    if (position.getAttribute('class') === 'active') {
      console.log(position)
      return position;
    }
  }
}

function currPositionPlayer2() {
  for (position of player2.children) {
    if (position.getAttribute('class') === 'active') {
      return position;
    }
  }
}

function winner() {
  for (position of player1.children) {
    if (position.getAttribute('class') === 'finish active') {
      return 'player 1';
    }
  }
  for (position of player2.children) {
    if (position.getAttribute('class') === 'finish active') {
      return 'player 2';
    }
  }
}

function movingCar(event) {
  let PositionPlayer1 = currPositionPlayer1();
  let PositionPlayer2 = currPositionPlayer2();
  let whoWin = winner();

  if (whoWin === 'player 1') {
    document.body.removeEventListener('keyup', movingCar);
    whoWinH2.innerText = "Player 1 Win!!!";
    btnNewGame.style.display = 'block';
  }
  else if (whoWin === 'player 2') {
    document.body.removeEventListener('keyup', movingCar);
    whoWinH2.innerText = "Player 2 Win!!!";
    btnNewGame.style.display = 'block';

  }
  else {

    if (event.key === 'ArrowRight') {
      PositionPlayer1.removeAttribute("class");
      PositionPlayer1.nextElementSibling.classList.add('active');


    } else if (event.key === 'd') {
      PositionPlayer2.removeAttribute("class");
      PositionPlayer2.nextElementSibling.classList.add('active');

    }
  }
}


document.body.addEventListener('keyup', movingCar);

btnNewGame.addEventListener('click', () => {
  window.window.location.reload();
})

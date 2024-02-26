'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let rezulat = 0;

console.log(secretNumber);

const display = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.number-input').value);
  console.log(guessNumber);

  // If you dont input an number

  if (!guessNumber) {
    display('Introduceti un numar');

    // If the Player Won
  } else if (secretNumber === guessNumber) {
    display('Felicitari ati Ghicit');

    document.querySelector('body').style.backgroundColor = 'rgb(0, 128, 0)';
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.question').textContent = secretNumber;

    if (score > rezulat) {
      rezulat = score;
      document.querySelector('.highscore').textContent = rezulat;
    }

    // Daca numarul nu corescunde cu numarul ghicit
  } else if (guessNumber !== secretNumber) {
    if (score >= 2) {
      document.querySelector('.guess-message').textContent =
        guessNumber > secretNumber ? 'Prea mare' : 'Prea mic';
      score = score - 2;
      document.querySelector('.score').textContent = score;
    } else {
      display('Game Over');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.question').textContent = secretNumber;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.score').textContent = score;
  display('Incearca sa Ghicesti');
  document.querySelector('.number-input').value = '';
});

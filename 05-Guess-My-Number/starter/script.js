'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent =
    //   '🤦‍♀️ You need to type in a number';
    displayMessage('you gotta type in a number');
    //if user wins the game
  } else if (guess === secretNumber) {
    displayMessage('you won! Congratz!');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? '😭 meh - number too high, try again'
      //     : '😭 meh - number too low, try again';
      displayMessage(
        guess > secretNumber
          ? '😭 meh - number too high, try again'
          : '😭 meh - number too low, try again'
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game over');
      document.querySelector('score').textContent = 0;
    }
  }

  //   //if number is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       '😭 meh - number too low, try again';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' ☠ Game over!';
  //     document.querySelector('score').textContent = 0;
  //   }

  //   //if number is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       '😭 meh - number too high, try again';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' ☠ Game over!';
  //     document.querySelector('score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  // document.querySelector('body').style.backgroundColor = '#fff';
});

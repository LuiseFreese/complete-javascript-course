'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct number!';
document.querySelector('.score').textContent = 42;
document.querySelector('.number').textContent = '?';
document.querySelector('.highscore').textContent = 99;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    document.querySelector('.message').textContent =
      '🤦‍♀️ You need to type in a number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 yay correct number';
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '😭 meh - number too low, try again';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' ☠ Game over!';
      document.querySelector('score').textContent = 0;
    }
  }
  if (score > 1) {
    document.querySelector('.message').textContent =
      '😭 meh - number too high, try again';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = ' ☠ Game over!';
    document.querySelector('score').textContent = 0;
  }
});

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
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    document.querySelector('.message').textContent =
      '🤦‍♀️ You need to type in a number';
  }
});

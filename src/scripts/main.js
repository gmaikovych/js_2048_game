'use strict';

const Game = require('../modules/Game.class');
const game = new Game();

const startButton = document.querySelector('.button.start');

startButton.addEventListener('click', () => {
  if (startButton.classList.contains('restart')) {
    game.restart();
  } else {
    game.start();
    startButton.textContent = 'Restart';
    startButton.classList.remove('start');
    startButton.classList.add('restart');
  }
});

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      game.moveLeft();
      break;
    case 'ArrowRight':
      game.moveRight();
      break;
    case 'ArrowUp':
      game.moveUp();
      break;
    case 'ArrowDown':
      game.moveDown();
      break;
  }
  game.addNumber();
});

'use strict';

const Game = require('../modules/Game.class');
const game = new Game();

const startButton = document.querySelector('.button.start');

startButton.addEventListener('click', () => {
  if (startButton.classList.contains('restart')) {
    document.removeEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleKeyDown);
    game.restart();
  } else {
    game.start();
    startButton.textContent = 'Restart';
    startButton.classList.remove('start');
    startButton.classList.add('restart');
  }
});

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(e) {
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
    default:
      return;
  }

  const currentStatus = game.getStatus();

  switch (currentStatus) {
    case 'win':
      document.querySelector('.message-win').classList.remove('hidden');
      document.removeEventListener('keydown', handleKeyDown);
      break;
    case 'playing':
      game.addNumber();
      break;
    case 'idle':
      document.querySelector('.message-lose').classList.remove('hidden');
      document.removeEventListener('keydown', handleKeyDown);
      break;
  }

  game.addNumber();
}

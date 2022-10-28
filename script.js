import { Game } from "./logic/game.js";
import { CalculatorGame } from "./logic/calculator_game.js";
import { GuessGame } from "./logic/guess_game.js";


const calc = new CalculatorGame();
calc.startNewGame();

const guess = new GuessGame();
guess.startGame();

let gameOneWon = false;
let gameTwoWon = false;

const triesFieldOne = document.querySelector('#game-tries-one');
triesFieldOne.textContent = `Próby: ${calc.getTries()}`;

const triesFieldTwo = document.querySelector('#game-tries-two');
triesFieldTwo.textContent = `Próby: ${guess.getTries()}`;

document.querySelector('#game-field-one').textContent = `${calc.printExpression()} = ?`;

document.querySelector('#game-form-one').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#game-input-one').value;
  const converedInput = Number.parseInt(input);
  document.querySelector('#game-message-one').textContent = calc.playRound(converedInput);
  triesFieldOne.textContent = `Próby: ${calc.getTries()}`;
  if (calc.getGameWon() || calc.getGameOver()) {
    gameOneWon = calc.getGameWon();
    document.querySelector('#game-form-one > input[type="submit"]').setAttribute('disabled', true);
    checkWins();
  }
  document.querySelector('#game-field-one').textContent = `${calc.printExpression()} = ?`;
});

document.querySelector('#game-form-two').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#game-input-two').value;
  const converedInput = Number.parseInt(input);
  document.querySelector('#game-message-two').textContent = guess.playRound(converedInput);
  triesFieldTwo.textContent = `Próby: ${guess.getTries()}`;

  if (guess.getGameWon() || guess.getGameOver()) {
    gameTwoWon = guess.getGameWon();
    document.querySelector('#game-form-two > input[type="submit"]').setAttribute('disabled', true);
    checkWins()
  }
});



function checkWins() {
  if(gameOneWon && gameTwoWon) {
    const canvas = document.querySelector('canvas');
    drawRectangle(guess.getNumber(), canvas);
  }
}

function drawRectangle(side, canvas) {
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.rect(10, 10, side, side);
  ctx.stroke();
}
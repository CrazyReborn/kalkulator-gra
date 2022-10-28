import { Game } from "./logic/game.js";
import { CalculatorGame } from "./logic/calculator_game.js";
import { GuessGame } from "./logic/guess_game.js";


const calc = new CalculatorGame();
calc.startNewGame();
const gameFieldOne = document.querySelector('#game-field-one');
gameFieldOne.textContent = `${calc.printExpression()} = ?`;
const gameMessageOne = document.querySelector('#game-message-one');

const guess = new GuessGame();
guess.startGame();
const gameMessageTwo = document.querySelector('#game-message-two');

let gameOneWon = false;
let gameTwoWon = false;

const triesFieldOne = document.querySelector('#game-tries-one');
triesFieldOne.textContent = `Próby: ${calc.getTries()}`;

const triesFieldTwo = document.querySelector('#game-tries-two');
triesFieldTwo.textContent = `Próby: ${guess.getTries()}`;

document.querySelector('#game-form-one').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#game-input-one').value;
  const converedInput = Number.parseInt(input);
  gameMessageOne.textContent = calc.playRound(converedInput);
  triesFieldOne.textContent = `Próby: ${calc.getTries()}`;
  if (calc.getGameWon() || calc.getGameOver()) {
    gameOneWon = calc.getGameWon();
    document.querySelector('#game-form-one > input[type="submit"]').setAttribute('disabled', true);
    checkWins();
  }
  gameFieldOne.textContent = `${calc.printExpression()} = ?`;
});

document.querySelector('#game-form-two').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#game-input-two').value;
  const converedInput = Number.parseInt(input);
  gameMessageTwo.textContent = guess.playRound(converedInput);
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
    
    const sideOne = calc.getFirstNumber();
    const sideTwo = calc.getSecondNumber();
    drawRectangle(sideOne, sideTwo, canvas);
    const base = guess.getNumber();
    const height = guess.getNumber();
    drawTriangle(sideOne, base, height, canvas);
  }
}

function drawRectangle(sideOne, sideTwo, canvas) {
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.rect(10, 10, sideOne, sideTwo);
  ctx.stroke();
}

function drawTriangle(offset, base, height, canvas) {
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  const startX = 40 + offset;
  const startY = 10;
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + base, startY);
  ctx.lineTo(startX + base / 2, startY + height);
  ctx.lineTo(startX, startY);
  ctx.fill();
}
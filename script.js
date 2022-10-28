import { Game } from "./logic/game.js";
import { CalculatorGame } from "./logic/calculator_game.js";


const calc = new CalculatorGame();
calc.startNewGame();
const triesFiled = document.querySelector('#game-tries-one');
triesFiled.textContent = `Próby: ${calc.getTries()}`;
document.querySelector('#game-field-one').textContent = `${calc.printExpression()} = ?`;
let gameOneWon = false;
let gameTwoWon = false;
//DOM set up
document.querySelector('#game-form-one').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#game-input-one').value;
  const converedInput = Number.parseInt(input);
  document.querySelector('#game-message-one').textContent = calc.playRound(converedInput);
  triesFiled.textContent = `Próby: ${calc.getTries()}`;
  if (calc.getGameWon() || calc.getGameOver()) {
    gameOneWon = calc.getGameWon();
    document.querySelector('#game-form-one > input[type="submit"]').setAttribute('disabled', true);
  }
  document.querySelector('#game-field-one').textContent = `${calc.printExpression()} = ?`;

});
document.querySelector('#game-form-two').addEventListener('submit', (e) => e.preventDefault());


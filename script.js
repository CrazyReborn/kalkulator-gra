import { Game } from "./logic/game.js";
import { CalculatorGame } from "./logic/calculator_game.js";

const calc = new CalculatorGame();
calc.startNewGame();
console.log(calc.getFirstNumber());
console.log(calc.getSecondNumber());
console.log(calc.getOperator())
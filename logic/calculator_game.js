import { Game } from './game.js';

export class CalculatorGame extends Game {
  _operators = ['+', '-', '*', '/'];
  _hint = '';
  _firstNumber = 0;
  _secondNumber = 0;
  _operator = '';

  constructor() {
    super();
  }

  getOperator() {
    return this._operator;
  }

  setRandomOperator() {
    this._operator = this._operators[Math.floor(Math.random() * this._operators.length)];
  }
  
  getFirstNumber() {
    return this._firstNumber
  }

  getSecondNumber() {
    return this._secondNumber;
  }

  startNewGame() {
    this._tries = 5;
    this._firstNumber = Math.floor(Math.random() * (99 - 1) + 1);
    this._secondNumber = Math.floor(Math.random() * (this._firstNumber - 1) + 1);
    this.setRandomOperator();
    this._hint = '';
    this._gameOver = false;
  }

}
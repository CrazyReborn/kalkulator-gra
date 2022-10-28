import { Game } from './game.js';

export class CalculatorGame extends Game {
  _operators = ['+', '-', '*', '/'];
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
    this.generateNumbers();
    this.setRandomOperator();
    this._hint = '';
    this._gameOver = false;
  }

  generateNumbers() {
    this._firstNumber = Math.floor(Math.random() * (99 - 1) + 1);
    this._secondNumber = Math.floor(Math.random() * (this._firstNumber - 1) + 1);
  }

  playRound(input) {
    if (this._gameOver) return;
    let result = 0;
    switch(this._operator) {
      case '+':
        result = this._firstNumber + this._secondNumber;
        break;
      case '-':
        result = this._firstNumber - this._secondNumber;
        break;
      case '*':
        result = this._firstNumber * this._secondNumber;
        break;
      case '/':
        result = Math.floor(result = this._firstNumber / this._secondNumber);
        break;
      default:
        result = 0;
    }
    const compare = this.compareInput(input, result);
    let message = '';
    if (compare) {
      this._gameWon = true;
      return 'Zgadzam się. Proszę do następnej gry.';
    } else {
      this._tries--;
      this._tries === 0 ? this.setGameOver(true) : null;
      this._gameOver ? message = 'Zla odpowiedź. Gra skończona.' : message = 'Zla odpowiedź. Sprobój jeszcze raz.';
    }
    return message;
  }

  compareInput(input, result) {
    return result === input;
  }

  setGameOver(value) {
    this._gameOver = value;
  }

  printExpression() {
    return `${this.getFirstNumber()} ${this.getOperator()} ${this.getSecondNumber()}`
  }
}
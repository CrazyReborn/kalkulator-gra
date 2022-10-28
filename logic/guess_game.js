import { Game } from "./game.js";

export class GuessGame extends Game {
  _number;
  
  constructor() {
    super();
  }

  startGame() {
    this._number = Math.floor(Math.random() * (10 - 1) + 1);
  }

  getNumber() {
    return this._number;
  }

  playRound(guess) {
    if(this._gameOver || this._gameWon) return;
    let message = '';
    if(guess === this._number) {
      this._gameWon = true;
      message = 'Dokladnie tak.';
    } else {
      this._tries--;
      this._tries <= 0 ? this._gameOver = true : null;
      if(this._gameOver) return 'Gra skończona.';
      message = 'Zla odpowiedź. Sprobój jeszcze raz.';
      if (this._tries < 2) {
        message += this._number > guess ? ' Za mało' : ' Za dużo';
      }
    }
    return message;
  }
}
import { Game } from "./game";

export class GuessGame extends Game {
  _number;
  
  constructor() {
    super();
  }

  startGame() {
    this._number = Math.floor(Math.random() * (99 - 1) + 1);
    console.log(this._number);
  }

  getNumber() {
    return this._number;
  }

  takeAGuess(guess) {
    let message = '';
    if(guess === this._number) {
      this._gameWon = true;
      message = 'Dokladnie tak.';
    } else {
      this.tries--;
      this._tries <= 0 ? this._gameOver = true : null;
      message = 'Zla odpowiedź. Sprobój jeszcze raz.';
      if (this._tries > 0 && this._tries < 3) {
        this._number > guess ? 'Za mało' : 'Za dużo';
      }
    }
    return message;
  }
}
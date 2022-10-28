export class Game {
  _gameOver = false;
  _tries = 5;
  _gameWon = false;
  constructor() {
  }

  getTries(){
    return this._tries;
  }

  getGameOver() {
    return this._gameOver;
  }

  getGameWon() {
    return this._gameWon;
  }

}
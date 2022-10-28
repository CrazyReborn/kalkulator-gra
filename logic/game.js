export class Game {
  _gameOver = false;
  _tries = 5;

  constructor() {
  }

  getTries(){
    return this._tries;
  }

  getGameOver() {
    return this._gameOver;
  }

}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kalkulator</title>
</head>
<body>
  <?php
    


    class Game {
      private $first_number;
      private $second_number;
      private $operators;
      private $operator;
      private $tries;
      private $game_over;

      public function __construct()
      {
        $this->operators = ['+', '-', '*', '/'];
        $this->first_number = rand(1, 99);
        $this->second_number = rand(1, $this->first_number);
        $this->operator = $this->operators[array_rand(($this->operators))];
        $this->tries = 5;
      }

      public function startNewGame() {
        $this->first_number = rand(1, 99);
        $this->second_number = rand(1, $this->first_number);
        $this->operator = $this->operators[array_rand(($this->operators))];
      }

      public function checkInput($input) {
        $result = false;
        switch($this->operator){
          case '+':
            $this->first_number + $this->second_number === $input ? $result = true : null;
            break;
          case '-':
            $this->first_number - $this->second_number === $input ? $result = true : null;
            break;
          case '*':
            $this->first_number * $this->second_number === $input ? $result = true : null;
            break;
          case '/':
            $this->first_number / $this->second_number === $input ? $result = true : null;
            break;
        }
        return $result;           
      }

      public function checkGameOver($result) {
        $$result = $result ? 'Correct!' : 'Inccorect! Try again';
        !$result ? $this->tries-- : null;
        $this->tries === 0 ? $this->game_over = true : null;
        return $this->game_over ? $result : null;
      }

      public function getGameOver() {
        return $this->game_over;
      }
    }

    $game = new Game();
  ?>


</body>
</html>
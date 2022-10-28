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
      private $hint;
      private $result;
      private $wins;

      public function __construct()
      {
        $this->operators = ['+', '-', '*', '/'];
        $this->wins = 0;
      }

      public function startNewGame() {
        // $this->first_number = rand(1, 99);
        // $this->second_number = rand(1, $this->first_number);
        // $this->operator = $this->operators[array_rand(($this->operators))];
        $this->start_new_round();
        $this->tries = 5;
        $this->hint = null;
        $this->result = null;
      }

      public function checkInput($input) {
        $result = false;
        $calculated = 0;
        $hint = '';
        switch($this->operator){
          case '+':
            $calculated = $this->first_number + $this->second_number;
            break;
          case '-':
            $calculated = $this->first_number - $this->second_number;
            break;
          case '*':
            $calculated = $this->first_number * $this->second_number;
            break;
          case '/':
            $calculated = ceil($this->first_number / $this->second_number);
            break;
        }

        $calculated === $input ? $result = true : null;
        $calculated < $input && $this->tries < 3 ? $this-> hint = 'Too little!' : $this-> hint = 'Too much!';
        return $this->checkGameOver($result);           
      }


      public function start_new_round() {
        $this->first_number = rand(1, 99);
        $this->second_number = rand(1, $this->first_number);
        $this->operator = $this->operators[array_rand(($this->operators))];
      }

      public function checkGameOver($result) {
        $this->result = $result ? 'Correct!' : 'Inccorect! Try again';
        !$result ? $this->tries-- : null;
        $this->tries === 0 ? $this->game_over = true : null;
        return $this->game_over ? $result : null;
      }

      public function get_tries() {
        return $this->tries;
      }

      public function get_first_number() {
        return $this->first_number;
      }

      public function get_second_number() {
        return $this->second_number;
      }

      public function get_operator() {
        return $this->operator;
      }

      public function get_hint() {
        return $this->hint;
      }

      public function get_game_over() {
        return $this->game_over;
      }
    }

    $game = new Game();
    $game->startNewGame();

    function get_input_and_check() {
      $answer = htmlspecialchars($_GET['answer']);

    }
  ?>

  <form method="GET" action=''>
    <p><?php echo $game->get_first_number() . ' ' . $game->get_operator() . ' ' . $game->get_second_number() .' = '; ?>
    <input type='text' name='answer' placeholder="?" required>
    <input type='submit' value='Check'>
  </form>

  <div class='messages'>
    <?php
    echo '<br>';
    echo $game->get_tries();
    ?>
  </div>
</body>
</html>
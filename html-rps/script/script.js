$(function() {

  var pChoice = 0;
  var $shootBtn = $('#shootBtn');
  var $rock = $('#rock');
  var $paper = $('#paper');
  var $scissors = $('#scissors');
  var $playerImage = $('#pChoice');
  var $computerImage = $('#cChoice');
  var $results = $('.game-results');

  function setImage(img, PorC) {
    var images = ["./img/rock.png", "./img/paper.png", "./img/scissors.png"];
    if(PorC === 'p') {
      $playerImage.fadeOut(500);
      setTimeout(function() {
        $playerImage.attr('src', images[img]);
      }, 500);
      $playerImage.fadeIn(500);
    } else if(PorC === 'c') {
      $computerImage.fadeOut(500);
      setTimeout(function() {
        $computerImage.attr('src', images[img]);
      }, 500);
      $computerImage.fadeIn(500);
    }
  }

  function injectResults(num) {
    var results = ["You won!", "The computer won.", "The game resulted in a tie."];

    $results.fadeOut(500);
    setTimeout(function() {
      $results.html("<p id='results'>" + results[num] + "</p>");
    }, 600);
    $results.fadeIn(500);
  }

  function determineWinner(pChoice, cChoice) {
    switch(pChoice) {
       case 0:
         switch(cChoice) {
           case 0:
             injectResults(2);
             break;
           case 1:
             injectResults(1);
             break;
           case 2:
             injectResults(0);
             break;
         }
         break;
       case 1:
         switch(cChoice) {
           case 0:
             injectResults(0);
             break;
           case 1:
             injectResults(2);
             break;
           case 2:
             injectResults(1);
             break;
         }
         break;
      case 2:
       switch(cChoice) {
         case 0:
           injectResults(1);
           break;
         case 1:
           injectResults(0);
           break;
         case 2:
           injectResults(2);
           break;
       }
       break;
     }
  }

  function computerChoice() {
    var cChoice = Math.floor(Math.random() * 3);
    if(cChoice === 0) {
      setImage(0, 'c');
    } else if(cChoice === 1) {
      setImage(1, 'c');
    } else if(cChoice === 2) {
      setImage(2, 'c');
    }
    return cChoice;
  }

  $shootBtn.on('click', function() {
     var cChoice = computerChoice();
     determineWinner(pChoice, cChoice);
  });

  $rock.on('click', function() {
    pChoice = 0;
    setImage(0, 'p');
  });

  $paper.on('click', function() {
    pChoice = 1;
    setImage(1, 'p');
  });

  $scissors.on('click', function() {
    pChoice = 2;
    setImage(2, 'p');
  });
});

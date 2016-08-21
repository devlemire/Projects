$('document').ready(function() {
  var playerImg = 'x';
  var computerImg = 'o';
  var openPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var openPositionIDs = ['top-left-image', 'top-middle-image', 'top-right-image', 'middle-left-image', 'middle-middle-image', 'middle-right-image', 'bottom-left-image', 'bottom-middle-image', 'bottom-right-image'];
  var computerChoice;
  var $pChoiceXradio = $('#playerChoiceX');
  var $pChoiceOradio = $('#playerChoiceO');
  var $quadrant = $('.quadrant img');

  var $topLeft = $('.0');
  var $topMiddle = $('.1');
  var $topRight = $('.2');

  var $middleLeft = $('.3');
  var $middleMiddle = $('.4');
  var $middleRight = $('.5');

  var $bottomLeft = $('.6');
  var $bottomMiddle = $('.7');
  var $bottomRight = $('.8');

  function computerMove() {
    if(openPositions.length !== 0) {
      for(var i in openPositions) {
        computerChoice = Math.floor(Math.random() * 10);
        if(computerChoice % 2 === 0) {
          computerChoice = openPositions[i];
          break;
        }
      }
      var $currentQuadrant = $('#' + openPositionIDs[computerChoice]);
      $('#'+openPositionIDs[computerChoice]).addClass(computerImg);
      setTimeout(function() {
        fadeInImg($currentQuadrant, './img/'+computerImg+'.png');
      }, 250);
      deletePosition(computerChoice);
    }
  }

  function fadeInImg($theQuadrant, theImg) {
    $theQuadrant.fadeOut(250);
    $theQuadrant.fadeIn(250);
    setTimeout(function() {
        $theQuadrant.attr('src', theImg);
    }, 250);
  }

  function deletePosition(position) {
  	var temp = [];
  	for(var i in openPositions) {
  		if(openPositions[i] != position) {
  			temp.push(openPositions[i]);
  		}
  	}

	  openPositions = temp;
    console.log(openPositions);
  }

  function checkForWinner() {
    
  }

  $pChoiceXradio.on('click', function() {
    playerImg = 'x';
    computerImg = 'o';
  });

  $pChoiceOradio.on('click', function() {
    playerImg = 'o';
    computerImg = 'x';
  });

  $quadrant.on('click', function() {
    var $currentQuadrant = $("#" + $(this).attr('id'));
    var currentPosition = $(this).attr('class');
    $(this).addClass(playerImg);

    deletePosition(currentPosition);
    fadeInImg($currentQuadrant, './img/'+playerImg+'.png');
    setTimeout(computerMove(), 10);
    checkForWinner();
  });
});

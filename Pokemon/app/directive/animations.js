angular
  .module('pokeApp')
  .directive('animations', function() {

    return {
      restrict: 'A',
      link: function( scope, element, attributes ) {

        var $instructions_btn = $('#instructions_btn');
        var $instructions_info = $('#infoAnimation');
        var $instructions_text = $('.instructions-text');

        $instructions_info.hide();

        $instructions_btn.on('click', function() {
          $instructions_info.slideDown('slow');

          if( $instructions_text.text().length === 0 ) {
            $(function(){
              $instructions_text.typed({
                strings: ["Click play to start your pokemon adventure!<br>Try to catch them all and view them in your pokedex.<br><br>Movement:<br>W, A, S, D<br><br>Actions:<br>Spacebar: Catch Pokemon"],
                typeSpeed: 0,
                showCursor: false
              });
            });
          }

        });
      }
    };

  });

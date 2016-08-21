angular
  .module('pokedexApp')
  .directive('homeAnimations', function($q, $timeout) {

    return {
      link: function( scope, ele, attr ) {
        var $welcomeBox = $('#welcome-box');
        var $homeTC = $('#home-text-container');
        var $homeText = $('#home-text1');

        var $p1 = $('#p1');
        var $p2 = $('#p2');
        var $p3 = $('#p3');

        $welcomeBox.hide();
        $homeTC.hide();
        $p1.hide();
        $p2.hide();
        $p3.hide();

        function fillWelcomeHeader() {

          var q = $q.defer();

          $timeout(function() {
            $("#welcome-text").typed({
                strings: ["Get your pokemon fix", "Online Pokemon Pokedex"],
                typeSpeed: 0,
                contentType: 'text',
                showCursor: false
            });
          }).then(function() {
            setTimeout(function() {
              q.resolve();
            }, 3400);
          });

          return q.promise;
        }

        function fillWelcomeText() {
          $homeTC.slideToggle('slow');

          var q = $q.defer();

          $timeout(function() {
            $homeText.typed({
                strings: ["Search for your favorite pokemon on the pokedex page! Or search by number to get a random pokemon! (1-721) See your recent searches on the pokemon page!"],
                typeSpeed: -20,
                contentType: 'text',
                showCursor: false
            });
          }, 500).then(function() {
            setTimeout(function() {
              q.resolve();
            }, 4600);
          });

          return q.promise;
        }

        function fadeInp1() {

          var q = $q.defer();

          $timeout(function() {
            $p1.fadeIn(500);

            $p1.animate({
              'margin-bottom': '100px'
            });

            $p1.animate({
              'margin-bottom': '0px'
            });
          }).then(function() {
            setTimeout(function() {
              q.resolve();
            }, 1500);
          });

          return q.promise;
        }

        function fadeInp2() {

          var q =$q.defer();

          $timeout(function() {
            $p2.fadeIn(500);

            $p2.animate({
              'margin-bottom': '100px'
            });

            $p2.animate({
              'margin-bottom': '0px'
            });
          }).then(function() {
            setTimeout(function() {
              q.resolve();
            }, 1500);
          });

          return q.promise;
        }

        function fadeInp3() {

          var q = $q.defer();

          $timeout(function() {
            $p3.fadeIn(500);

            $p3.animate({
              'margin-bottom': '100px'
            });

            $p3.animate({
              'margin-bottom': '0px'
            });
          }).then(function() {
            setTimeout(function() {
              q.resolve();
            }, 1500);
          });

          return q.promise;
        }

        function groupJump() {
          $p1.animate({
            'margin-bottom': '100px'
          });

          $p1.animate({
            'margin-bottom': '0px'
          });

          $p2.animate({
            'margin-bottom': '100px'
          });

          $p2.animate({
            'margin-bottom': '0px'
          });

          $p3.animate({
            'margin-bottom': '100px'
          });

          $p3.animate({
            'margin-bottom': '0px'
          });
        }

        function startAnimation() {
          $welcomeBox.slideToggle('slow');
          fillWelcomeHeader().then(function() {
            fillWelcomeText().then(function() {
              fadeInp1().then(function() {
                fadeInp2().then(function() {
                  fadeInp3().then(function() {
                    groupJump();
                  });
                });
              });
            });
          });
        }

        startAnimation();
      }
    };

  });

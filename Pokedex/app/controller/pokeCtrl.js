angular
  .module('pokedexApp')
  .controller('ctrl', function($scope, srvc) {

    $scope.history = srvc.history;

    $scope.getPokemonData = function(id) {
      srvc.getPokemonData(id).then(function( r ) {
        $scope.otherForms = r.data.sprites;
        $scope.pokeImg = r.data.sprites.front_default;
        $scope.pokeName = r.data.name;
        $scope.pokeWeight = r.data.weight;
        $scope.pokeStats = r.data.stats;

        $scope.history = srvc.updateHistory(
          $scope.pokeName,
          $scope.otherForms.front_default,
          $scope.otherForms.back_default,
          $scope.otherForms.front_shiny,
          $scope.otherForms.back_shiny
        );
      });
    };

  });

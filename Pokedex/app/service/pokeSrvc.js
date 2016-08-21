angular
  .module('pokedexApp')
  .service('srvc', function($http) {

    var MAX_POKE = 721;
    var BASE_URL = 'http://pokeapi.co/api/v2/';
    var POKEMON = 'pokemon/';
    var SPECIES = 'species/';

    var history = [];

    this.history = history;

    this.updateHistory = function(title, f1, b1, f2, b2) {
      console.log('hit');
      history.push({
        title: title,
        f1: f1,
        b1: b1,
        f2: f2,
        b2: b2
      });

      this.history = history;
      return this.history;
    };

    this.getPokemonData = function(id) {
      return $http.get(BASE_URL + POKEMON + id);
    };

  });

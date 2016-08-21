angular
  .module('pokedexApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../view/homeTmpl.html'
      })
      .state('pokemon', {
        url: '/pokemon',
        templateUrl: '../view/pokemon.html',
        controller: 'ctrl'
      })
      .state('pokedex', {
        url: '/pokedex',
        templateUrl: '../view/pokedex.html',
        controller: 'ctrl'
      });

      $urlRouterProvider.otherwise('/');
  });

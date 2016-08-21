angular.module('pokeApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../view/home.html',
        controller: 'mainCtrl'
      })
      .state('pokedex', {
        url: '/pokedex',
        templateUrl: '../view/pokedex.html',
        controller: 'mainCtrl'
      });

      $urlRouterProvider.otherwise('/');
  });

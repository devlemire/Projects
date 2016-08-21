angular
  .module('app', ['ui.router', 'ngAudio', 'ngDialog'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './view/albumsTmpl.html',
        controller: 'ctrl'
      })
      .state('songs', {
        url: '/songs',
        templateUrl: './view/homeTmpl.html',
        controller: 'ctrl'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: './view/cartTmpl.html',
        controller: 'ctrl'
      })
      .state('checkout', {
        url: '/checkout',
        templateUrl: './view/checkoutTmpl.html'
      })
      .state('albumView', {
        url: '/album-view/:id',
        templateUrl: "./view/albumViewTmpl.html",
        controller: 'albumViewCtrl'
      });

      $urlRouterProvider.otherwise('/');
  });

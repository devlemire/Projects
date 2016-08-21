angular
  .module('app', ['satellizer', 'ui.router'])
  .config(function($authProvider, $locationProvider, $stateProvider, $urlRouterProvider) {

    //Don't forget to require satellizer and ui.router on line 2

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './view/homeTmpl.html'
      })
      .state('login', {
        url: '/',
        templateUrl: './view/loginTmpl.html'
      });

    //After your states, or before, you can list out all the providers for your authentication
    $authProvider.google({
      clientId: 'YOUR GOOGLE APP ID HERE'
    });

    $authProvider.facebook({
      clientId: 'YOUR FACEBOOK APP ID HERE'
    });

    // $urlRouterProvider.otherwise('/login');
    //We are using HTML5MODE because Google Auth doesn't like fragments (#) in the url. Don't forget to include your <base href='/'> in the header tag on your index.html file or html5Mode will fail
    $locationProvider.html5Mode(true);
  });

angular
  .module('app')
  .controller('ctrl', function($scope, $auth, $location) {

    //$scope.authenticate handles all forms of authentication, because we pass it a provider.
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider).then(function(r) {
        // console.log(r); --Check to see what data is being sent back
        //The data we get back from the back end has all the profile information and JWT token, we can then use the token and the user information
        //And store it on local storage so it presists through reload/refreshing
        $auth.setToken(r.data.token);
        // console.log($auth.getToken()); --Check to see if token is in local storage

        //Store token and user info to localStorage
        window.localStorage.setItem('token', r.data.token);
        window.localStorage.setItem('user', JSON.stringify(r.data.user[0]));

        // console.log('LOCAL USER:', window.localStorage.getItem('user')); --Check to see you stored the right user

        //In this example, I wanted to display the email of the person logged in, so you grab it from local storage and set it on the $scope
        $scope.email = JSON.parse(window.localStorage.getItem('user')).email;

        //After all information is stored, transition to the home page which will then display the email
        $location.path('/home');
      });
    };

    //Check to see if user is logged in, if so push the user to the home page automatically, (No need to sign in again)
    $scope.alreadyLoggedIn = function() {
      // console.log("CURRENT SESSION:", $auth.getToken()); --Check to see if there is a token on local storage (meaning you're logged in)
      if( !($auth.getToken()) ) {
        // console.log('NOT LOGGED IN, REDIRECTING');

        //If token comes back a falsy value, meaning it doesn exsist, then spit back to the login page instead of the home page
        //This is how we prevent users from typing in the url http://localhost:3000/home and by-passing our login.
        $location.path('/');
      } else if($auth.getToken()) {
        //The token exsist, the user is logged in, send them to the home page automatically
        $location.path('/home');
        //Regrab the email property to display on the homepage
        $scope.email = JSON.parse(window.localStorage.getItem('user')).email;
      }
    }();

    //Log the user out, in otherwords delete the token and user info from local storage
    $scope.logoutFunction = function() {
      // console.log('LOGGING OUT');
      //Finds the token and removes it
      $auth.logout();
      //Change the path back to the login page
      $location.path('/');
      //Clear localStorage, which gets rid of the user object
      localStorage.clear();
    };

  });

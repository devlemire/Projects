angular
  .module('app')
  .controller('ctrl', function($scope, mediaLoading, cart) {

    $scope.albums = mediaLoading.getAlbums();
    $scope.songs = mediaLoading.getSongs();
    $scope.cart = cart.getCart();
    $scope.total = cart.getTotal();

    $scope.clearVal = function() {
      $scope.search = "";
    };

    $scope.getTotal = function() {
      $scope.total = cart.getTotal();
    };

    $scope.test = function() {
      console.log($scope.search);
    };
  });

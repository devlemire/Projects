angular
  .module('app')
  .directive('desktopProject', function() {

    return {
      restrict: 'E',
      templateUrl: './view/desktopProjectTmpl.html',
      scope: {
        data: '='
      }
    };

  });

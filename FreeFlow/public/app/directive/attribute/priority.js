angular
  .module('app')
  .directive('priority', function() {

    return {
      restrict: 'A',
      scope: {
        data: '='
      },
      link: function(scope, ele, attr) {
        if(scope.data === 2) {
          scope.data = 'red';
        } else if(scope.data === 1) {
          scope.data = 'coral';
        } else if(scope.data === 0) {
          scope.data = 'green';
        }
        // console.log('PRIORITY DIRECTIVE', scope.data);
        ele.css('color', scope.data);
      }
    };

  });

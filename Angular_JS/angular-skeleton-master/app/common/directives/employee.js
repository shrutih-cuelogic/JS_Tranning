angular.module('employee.directives', ['home.service'])
.directive('customAction', ['$location', 'homeService', function($location, homeService) {
  return {
    restrict: 'E',
    template: '<button class="btn btn-info btn-sm"><span class="glyphicon glyphicon-trash"></span> Delete</button>',
    link: function($scope, $elem, $attrs) {
      $elem.on("click", function() {
        var confirmDelete = confirm("Are you sure want to delete?");
        if (confirmDelete) {
          var cb = $scope.$eval($attrs.actionClick),
            args = $attrs.actionClickArgs;
          
          if (args) {
            args = args.split(',');
          }
          
          cb.apply({}, args);
          $scope.$apply();
        }
      });
    },
  };
}]);

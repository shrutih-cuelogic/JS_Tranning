angular.module('employee.delete', ['home.service'])
.directive('employeeDelete',['$location','homeService', function($location,homeService) {
  return {
  	restrict: 'E',
    templateUrl: 'app/home/views/delete_emp.html',
    link : function($scope, $element, attr) {
    $element.on("click",function(){
     	homeService.deleteEmployee(attr.id);
     	   //$rootScope.employees = response;
          $location.path('/home/');
     });
    }
  };
}]);
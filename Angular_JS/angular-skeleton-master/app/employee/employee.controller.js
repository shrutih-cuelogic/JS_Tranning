angular.module('employee.controller',['services'])
      .controller('employeeCtrl',['$scope','employeeService',EmployeeController])

function EmployeeController($scope,employeeService) {
  $scope.employees = employeeService.get();
};
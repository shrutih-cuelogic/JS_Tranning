angular.module('employee.route', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/employees', {
            templateUrl: 'app/employee/views/employee.html',
            controller: 'employeeCtrl'
        });
    }]);

angular.module('home.route', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when('/emp_view/:id', {
	templateUrl: 'app/home/views/emp_view.html',
	controller: 'homeCtrl'
	});
	$routeProvider.when('/add_emp', {
	templateUrl: 'app/home/views/add_emp.html',
	controller: 'homeCtrl'
	});
  $routeProvider.when('/home', {
    templateUrl: 'app/home/views/home.html',
    controller: 'homeCtrl'
  });
}]);

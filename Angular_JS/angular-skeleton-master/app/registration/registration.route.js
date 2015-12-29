angular.module('registration.route', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/registration', {
    templateUrl: 'app/registration/views/registration.html',
    controller: 'registrationCtrl'
  });
}]);

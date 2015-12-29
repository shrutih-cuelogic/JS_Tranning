'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
  'ngRoute',
  'home',
  'employee',
  'login',
  'registration'
]).
config(['$routeProvider', function($routeProvider) {

  	$routeProvider.otherwise({redirectTo: '/home'});
}]);

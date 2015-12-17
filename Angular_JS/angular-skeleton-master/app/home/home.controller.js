angular.module('home.controller', ['services'])
    .controller('homeCtrl', ['$scope', 'homeService', HomeController])

function HomeController($scope, homeService) {
    var username = localStorage.getItem('username');
    if (username) {
        $scope.emp_name = username;
    } else {
        $location.path('/login');
    }
};

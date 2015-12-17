angular.module('login.controller', ['services'])
    .controller('loginCtrl', ['$scope', '$location', 'loginService', LoginController])

function LoginController($scope, $location, loginService) {
    $scope.myForm = {
        email: $scope.email,
        password: $scope.password
    };

    $scope.login = function() {
        var valid = loginService.login($scope.email, $scope.password);
        if (valid) {
          alert('Correct credentials');
          $location.path('/home');
        }
        else{
          alert('Invalid email and password');
        }
    }
};

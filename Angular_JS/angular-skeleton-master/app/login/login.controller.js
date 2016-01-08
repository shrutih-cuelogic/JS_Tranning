angular.module('login.controller', ['services'])
    .controller('loginCtrl', ['$scope', '$location', '$rootScope', 'serverLocalStorageService', 'loginService', LoginController])

function LoginController($scope, $location, $rootScope, serverLocalStorageService, loginService) {
    $scope.error = "";

    $scope.login = function() {
        loginService.login($scope.email, $scope.password)
            .then(function(response) {
                if (serverLocalStorageService.isSupported) {
                    serverLocalStorageService.set('tokenid', $scope.email);
                    $location.path('/home');
                    $rootScope.email = $scope.email;
                } else {
                    $scope.error = "Local storage not supported.";
                }
            }, function(rejected) {
                $scope.error = "Invalid email/password";
            })
    };

    $scope.validateLogin = function() {
        loginService.validateLogin()
            .then(function(response) {
                if (serverLocalStorageService.isSupported) {
                    serverLocalStorageService.set('tokenid', $scope.email);
                    $location.path('/home');
                    $rootScope.email = $scope.email;
                } else {
                    $scope.error = "Local storage not supported";
                }
            }, function(rejected) {
                $scope.login();
            })
    };

};

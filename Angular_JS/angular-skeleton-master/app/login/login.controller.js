angular.module('login.controller', ['services'])
    .controller('loginCtrl', ['$scope', '$location', '$rootScope', 'serverLocalStorageService', 'loginService', LoginController])

function LoginController($scope, $location, $rootScope, serverLocalStorageService, loginService) {
    // $scope.loginForm = {
    //     email: $scope.email,
    //     password: $scope.password
    // };
    $scope.error = "";

    $scope.login = function (){
        loginService.login($scope.email,$scope.password)
         .then(function(response) {         
            if (serverLocalStorageService.isSupported) {
                serverLocalStorageService.set('tokenid', $scope.email);
                $location.path('/home');
                $rootScope.email = $scope.email;
            }
            else{
                console.log('Login');
                $scope.error="Local storage not supported.";
            }
          }, function(rejected){
                $scope.error="Invalid email/password";
          })
    };

    $scope.validateLogin = function (){
        loginService.validateLogin()
         .then(function(response){          
                if (serverLocalStorageService.isSupported) {
                    serverLocalStorageService.set('tokenid', $scope.email);
                    $location.path('/home');
                    $rootScope.email = $scope.email;
                }else{
                    console.log('validateLogin');
                    $scope.error="Local storage not supported";
                }
          },function(rejected){
                $scope.login();
          })
    };

};

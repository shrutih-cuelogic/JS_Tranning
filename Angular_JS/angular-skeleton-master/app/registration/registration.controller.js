angular.module('registration.controller', ['services'])
    .controller('registrationCtrl', ['$scope', '$location', 'employeeService', RegistrationController])


function RegistrationController($scope, $location, employeeService) {

    $scope.checkPassword = function() {
        $scope.registerForm.confirm_password.$error.dontMatch = $scope.password !== $scope.confirm_password;
    };

    $scope.registration = function() {
        employeeService.set($scope.username, $scope.password, $scope.confirm_password, $scope.email);
        $location.path('/login')
        alert('You are successfully registered.Please click on login')
    };
};

angular.module('registration.controller', ['services'])
    .controller('registrationCtrl', ['$scope', '$location', 'homeService', RegistrationController])


function RegistrationController($scope, $location, homeService) {
    $scope.employees = {};
    employee_details = homeService.getEmp();

    $scope.checkPassword = function() {
        $scope.registerForm.confirm_password.$error.dontMatch = $scope.password !== $scope.confirm_password;
    };


    $scope.registration = function() {
        flag = 0;
        for (var i = 0; i < employee_details.length; i++) {
            if (employee_details[i].id == $scope.id) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            $scope.employees = {
                id: parseInt($scope.id),
                emp_name: $scope.emp_name,
                password: $scope.password,
                confirm_password: $scope.confirm_password,
                email: $scope.email,
                address: $scope.address
            }
            homeService.getEmp().push($scope.employees);
            console.log(homeService.getEmp());
            $location.path('/login')
            alert('You are successfully registered.Please click on login');
        } else {
            alert("This id already exists..!!!");
        }
    };
};

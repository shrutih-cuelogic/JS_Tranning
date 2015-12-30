angular.module('home.controller', ['services'])
    .controller('homeCtrl', ['$scope', '$rootScope', '$location', '$routeParams', 'homeService', HomeController])

function HomeController($scope, $rootScope, $location, $routeParams, homeService) {
    // var employeeObj = localStorage.getItem('employeeObj');
    // if (employeeObj) {
    //     $scope.employeeObj = JSON.parse(employeeObj);

    // } else {
    //     $location.path('/login');

    $scope.employees = homeService.getEmp();

    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.current_id = $routeParams.id;
    });

    $scope.deleteEmpRecord = function(ind) {
        var result = confirm("Are you sure want to delete?");
        if (result) {
            $scope.employees = homeService.deleteEmployee(ind, $rootScope.current_id);
        }
    };
    $scope.editEmpRecord = function() {
        $location.path('/home')
    }

    $scope.addEmpRecord = function() {
        homeService.addEmployee($scope.id, $scope.emp_name, $scope.email, $scope.address);
        $location.path('/home')
    }
    $scope.sortrecords = '-emp_name';
};
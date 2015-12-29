angular.module('home.controller', ['services'])
    .controller('homeCtrl', ['$scope', '$rootScope', '$location', '$routeParams', 'homeService', HomeController])

function HomeController($scope, $rootScope, $location, $routeParams, homeService) {
    // var employeeObj = localStorage.getItem('employeeObj');
    // if (employeeObj) {
    //     $scope.employeeObj = JSON.parse(employeeObj);

    // } else {
    //     $location.path('/login');

    $scope.employees = homeService.get();

    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.current_id = $routeParams.id;
    });

    // $scope.edit_click = function() {
    //     var employees_details = homeService.updateEmp($rootScope.current_id, data);
    // };

    // $scope.editEmployee = function(data) {
    //     $scope.selectedEmployee = data;
    //     $scope.selectedEmployeeCopy = angular.copy($scope.selectedEmployee);
    // }
    $scope.deleteEmpRecord = function(ind) {
        $scope.employees = homeService.deleteEmployee();
        return $scope.employees
    };
    // $scope.saveEmployee = function() {
    //         for(k in $scope.selectedEmployee){
    //          	$scope.selectedEmployee[k] = $scope.selectedEmpCopy[k];
    //         }
    //     }
};

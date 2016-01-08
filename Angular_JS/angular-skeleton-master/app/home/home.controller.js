angular.module('home.controller', ['services'])
    .controller('homeCtrl', ['$scope', '$rootScope', '$location', '$routeParams', 'serverLocalStorageService', 'homeService', HomeController])

function HomeController($scope, $rootScope, $location, $routeParams, serverLocalStorageService, homeService) {

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

    $scope.logout = function() {
            serverLocalStorageService.clearAll();
             $location.path('/login');
             serverLocalStorageService.get('tokenid');
    }

};
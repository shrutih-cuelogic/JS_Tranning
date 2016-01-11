angular.module('employee.delete', ['home.service'])
.directive('employeeDelete',['$location','homeService', function($location,homeService) {
  return {
    restrict: 'E',
    templateUrl: 'app/home/views/delete_emp.html',
    link: function (scope, $elem, attr) {
      $elem.on("click",function(){
        var r = confirm("Are you sure want to delete?");
          if(r == true){
            var response = homeService.deleteEmployee(attr.email);
            console.log("hi its directive");
            console.log(response);
            $location.path('/home');
          }
          else{
            alert("No records are deleted...!!")
          }
      });
    },
  };
}]);
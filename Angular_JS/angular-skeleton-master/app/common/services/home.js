angular.module('home.service', ['employee.service'])
    .service('homeService', ['employeeService', homeService]);

function homeService(employeeService) {
    var service = {};
    var employee_details = [];

    function get() {
        employee_details = employeeService.employee();
        return employee_details
    };

    function deleteEmployee(ind) {

        var result = confirm("Are you sure want to delete?");
        if (result) {
            console.log(employee_details);
            employee_details.splice(ind, 1);
            console.log(employee_details);
            return employee_details
        } 
        else {
            return alert("You dont want to delete the item");
        }
    }

    service.get = get;
    service.deleteEmployee = deleteEmployee;
    return service
};

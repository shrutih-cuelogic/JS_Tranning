angular.module('login.service', ['employee.service'])
    .service('loginService', ['employeeService', loginService]);


function loginService(employeeService) {

    var service = {};
    service.login = login;
    return service;

    function login(email, password) {
        emp_email = email;
        emp_password = password;

        var employee_credentials = employeeService.get();
        var employeeObj;
        valid = false;
        for (var i = 0; i < employee_credentials.length; i++) {
            if (employee_credentials[i].email == emp_email && employee_credentials[i].password == emp_password) {
                valid = true;
                employeeObj = employee_credentials[i];
                break;
            }
        }
        if(valid) {
            localStorage.setItem('username',employeeObj.emp_name);
        }
        return valid;
    }
};

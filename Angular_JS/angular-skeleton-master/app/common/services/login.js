angular.module('login.service', ['home.service', 'localStorage.service'])
    .service('loginService', ['$q', 'serverLocalStorageService', 'homeService', loginService]);


function loginService($q, serverLocalStorageService, homeService) {

    var service = {};

    function login(email, password) {
        emp_email = email;
        emp_password = password;

        return $q(function(resolve, reject){
            var employee_credentials = homeService.getEmp();
            console.log(employee_credentials);
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
                //localStorage.setItem("employeeObj",JSON.stringify(employeeObj));
                resolve(employeeObj);
            }
            else {
                reject(false);
            }  
            return valid;
        });
    }
    function validateLogin() {
        return $q(function(resolve, reject) {
            var localTokenId = serverLocalStorageService.get('tokenid');
                if (localTokenId!=undefined) {
                        resolve(true);
                 }else{
                        reject(false);
                }         
            });     
        }
    service.login = login;
    service.validateLogin = validateLogin;
    return service;
};

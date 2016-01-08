angular.module('login.service', ['home.service', 'localStorage.service'])
    .service('loginService', ['$q', 'serverLocalStorageService', 'homeService', loginService]);


function loginService($q, serverLocalStorageService, homeService) {

    var service = {};

    function login(email, password) {

        return $q(function(resolve, reject) {
            valid = false;
            var emp_credentials = homeService.getEmp();
            for (var i = 0; i < emp_credentials.length; i++) {
                if (emp_credentials[i]['email'] == email && emp_credentials[i]['password'] == password) {
                    valid = true;
                    break;
                }
            }
            if (valid) {
                console.log(emp_credentials[i]);
                resolve(emp_credentials[i]);
            } else {

                reject(false);
            }
        });
    }

    function validateLogin() {
        return $q(function(resolve, reject) {
            var localTokenId = serverLocalStorageService.get('tokenid');
            if (localTokenId != undefined) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    }
    service.login = login;
    service.validateLogin = validateLogin;
    return service;
};

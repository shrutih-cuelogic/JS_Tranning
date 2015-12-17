angular.module('employee.service', [])
    .service('employeeService', [employeeService]);


function employeeService() {

    var service = {};
    service.get = get;
    return service;


    function get() {
        return [{
            'email': 'pranay.dubey@cuelogic.co.in',
            'password': 'pranay',
            'emp_name': 'Pranay'
        }, 
        {
            'email': 'shruti.hiremath@cuelogic.co.in',
            'password': 'shruti',
            'emp_name': 'Shruti'
        },
        {
            'email': 'shweta.hiremath49@gmail.com',
            'password': 'shweta49',
            'emp_name': 'Shweta'
        }]
    };
}

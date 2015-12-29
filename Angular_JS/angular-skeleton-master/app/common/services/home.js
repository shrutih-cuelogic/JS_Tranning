angular.module('home.service', ['employee.service'])
    .service('homeService', ['employeeService', homeService]);

function homeService(employeeService) {
    
    var service = {};
    var employee_records = [
        {
            'id': 1,
            'email': 'pranay.dubey@cuelogic.co.in',
            'password': 'pranay',
            'emp_name': 'Pranay',
            'address' : 'KP road,Pune'
        }, 
        {
            'id': 2,
            'email': 'shruti.hiremath@cuelogic.co.in',
            'password': 'shruti',
            'emp_name': 'Shruti',
            'address' : 'Sinhgad road,Pune'
        }, 
        {
            'id': 3,
            'email': 'shweta.hiremath49@gmail.com',
            'password': 'shweta49',
            'emp_name': 'Shweta',
            'address' : 'Aundh road,Pune'
        }, 
        {
            'id': 4,
            'email': 'richa.dagar@gmail.com',
            'password': 'richa',
            'emp_name': 'Richa',
            'address' : 'Paud road,Pune'
        }, 
    ]

    function getEmp() {
        return employee_records;
    };

    function deleteEmployee(ind, id) {
        if(employee_records.id == id) {
            employee_records.splice(ind, 1);
        }
    }

    service.getEmp = getEmp;
    service.deleteEmployee = deleteEmployee;
    return service
};

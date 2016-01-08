angular.module('home.service', [])
    .service('homeService', ['$rootScope', '$location', homeService]);

function homeService($rootScope, $location) {

    var service = {};
    var employee_records = [{
        'id': 1,
        'email': 'pranay.dubey@cuelogic.co.in',
        'password': 'pranay',
        'emp_name': 'Pranay',
        'address': 'KP road,Pune'
    }, {
        'id': 2,
        'email': 'shruti.hiremath@cuelogic.co.in',
        'password': 'shruti',
        'emp_name': 'Shruti',
        'address': 'Sinhgad road,Pune'
    }, {
        'id': 3,
        'email': 'shweta.hiremath49@gmail.com',
        'password': 'shweta49',
        'emp_name': 'Shweta',
        'address': 'Aundh road,Pune'
    }, {
        'id': 4,
        'email': 'richa.dagar@gmail.com',
        'password': 'richa',
        'emp_name': 'Richa',
        'address': 'Paud road,Pune'
    }, ]

    function getEmp() {
        return employee_records;
    };

    function deleteEmployee(email) {
        for (var i = 0; i < employee_records.length; i++) {
            if (employee_records[i]["email"] == email) {
                employee_records.splice(employee_records.indexOf(employee_records[i]), 1);
                console.log(employee_records);
                break;
            }
        }
        return employee_records;
    }

    function addEmployee(id, name, email, address) {
        var new_employee = {};
        flag = 0;
        for (var i = 0; i < employee_records.length; i++) {
            if (employee_records[i].id == id) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            new_employee.id = parseInt(id);
            new_employee.emp_name = name;
            new_employee.email = email;
            new_employee.address = address;
            employee_records.push(new_employee);
        } else {
            alert("This id already exists..!!!")
        }
    }

    service.getEmp = getEmp;
    service.deleteEmployee = deleteEmployee;
    service.addEmployee = addEmployee;
    return service
};

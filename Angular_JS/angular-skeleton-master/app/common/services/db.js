angular.module('db.service',[])
       .service('dbService',[dbService]);

function dbService() {

	var database = {
		'users' : [ 
			{
				'email' : 'pranay.dubey@cuelogic.co.in',
				'password' : 'demo',
				'name' : {
					'first' : 'Pranay',
					'last' : 'Dubey'
				}
			},
			{
				'email' : 'shruthi.hemant@cuelogic.co.in',
				'password' : 'demo'
			}
		]
	};

	return database;
};
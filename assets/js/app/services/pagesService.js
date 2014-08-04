define(['./module'], function (services) {
	'use strict';
  services.service('pagesService', function ($http, $sails) {

  		var signup = function(_name, _email, _password) {

			console.log('The name: '+_name);
			console.log('The name: '+_email);
			console.log('The name: '+_password);

		  	return $http({method: 'POST', url: '/pages',data: {
		                        name: _name,
		                        email: _email,
		                        password: _password
		    }}).
			success(function(data, status, headers, config) {
			}).
			error(function(data, status, headers, config) {
			});	
			  	
		};

		var pagesService = {
			signup:signup
		};

		return pagesService;

  });
  	
});
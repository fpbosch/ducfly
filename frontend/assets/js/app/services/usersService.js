define(['./module'], function (services) {
	'use strict';
  services.service('usersService', function ($http, $sails, localUrl) {

		var login = function(formData) {

			console.log('PASSEM PER AQUI ?');
			
  			return $sails.post(localUrl+"/auth/process", formData)
		      .success(function (data) {
		        //$scope.page = data;
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      });
			  	
		};

		var create = function(formData) {

  			return $sails.post(localUrl+"/users", formData)
		      .success(function (data) {
		        //$scope.bars = data;
		      
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      
		      });

		};

		var usersService = {
			login:login,
			create:create,
		};

		return usersService;

  });
  	
});
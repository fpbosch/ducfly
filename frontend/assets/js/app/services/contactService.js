define(['./module'], function (services) {
	'use strict';
  	services.service('contactService', function ($http, $sails, localUrl) {
  	//services.service('menusService', function ($http, localUrl) {

  		var create = function(formData) {

			console.log(JSON.stringify(formData));
			
  			return $sails.post(localUrl+"/contact", formData)
		      .success(function (data) {
		        //$scope.bars = data;
		      
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      
		     });

		};

		var contactService = {
			create:create,
		};

		return contactService;

  });
  	
});
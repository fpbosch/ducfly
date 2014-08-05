define(['./module'], function (services) {
	'use strict';
  services.service('pagesService', function ($http, $sails) {

  		var getAll = function() {

  			return $sails.get("http://localhost:1337/pages/getAll")
		      .success(function (data) {
		        //$scope.bars = data;
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      });


		    $sails.on("message", function (message) {
		      if (message.verb === "create") {
		        //$scope.bars.push(message.data);
		      }
		    });


			/*console.log('The name: '+_name);
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
			});*/	
			  	
		};

		var pagesService = {
			getAll:getAll
		};

		return pagesService;

  });
  	
});
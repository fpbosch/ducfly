define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('SignupNewCtrl', ['$scope', '$rootScope', 'usersService', function ($scope, $rootScope, itemsService) {

  	$scope.ok = function(username, password) {

  		var formData = {
			'username':username,
			'password':password
		};

		console.log('PASSEM PER AQUI');
		
		var result = itemsService.create(formData).success(function(item) {

			console.log(item);

			$scope.result = item;
	
		}).error(function (data) {

			alert('Houston, we got a problem!');
		
		});
	
	}

  }]);

});
define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('PagesNewCtrl', ['$scope', 'pagesService', function ($scope, pagesService) {

  	$scope.ok = function(title, body) {
  		console.log('El body: '+body);
		var result = pagesService.create(title, body).success(function(page) {
			$scope.result = page;
		}).error(function (data) {
			alert('Houston, we got a problem!');
		});
	
	}

  }]);

});
define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('PagesNewCtrl', ['$scope', '$rootScope', 'pagesService', function ($scope, $rootScope, pagesService) {

  	$rootScope.leftMenu=true;

  	$scope.ok = function(title, body, order) {

  		var formData = {
			'title':title,
			'body':body,
			'order':order
		};

		var result = pagesService.create(formData).success(function(page) {

			$scope.result = page;
		}).error(function (data) {
			alert('Houston, we got a problem!');
		});
	
	}

  }]);

});
define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('MenusNewCtrl', ['$scope', 'pagesService', function ($scope, pagesService) {

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
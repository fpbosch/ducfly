define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('PagesEditCtrl', ['$scope', '$routeParams', 'pagesService', function ($scope, $routeParams, itemService) {

  	var result = itemService.getOne($routeParams.itemId).success(function(data) {
		//console.log(pages);
		console.log(data);
		$scope.item = data;
	}).error(function (data) {
		alert('Houston, we got a problem!');
	});

	$scope.ok = function(id, title, body) {
  		console.log('El body: '+body);
		var result = itemService.update(id, title, body).success(function(item) {
			$scope.result = item;
		}).error(function (data) {
			alert('Houston, we got a problem!');
		});
	
	}



  }]);

});
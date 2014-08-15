define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('PagesEditCtrl', ['$scope', '$routeParams', 'pagesService', function ($scope, $routeParams, itemService) {

  	$scope.title='';
  	$scope.body='';
  	$scope.order=0;
  	
  	var result = itemService.getOne($routeParams.itemId).success(function(data) {
		//console.log(pages);
		console.log(data);
		$scope.item = data;
	}).error(function (data) {
		alert('Houston, we got a problem!');
	});

	$scope.ok = function(id, title, body, order) {
  		console.log('El body: '+body+' order '+order);
		var result = itemService.update(id, title, body, order).success(function(item) {
			$scope.result = item;
		}).error(function (data) {
			alert('Houston, we got a problem!');
		});
	
	}



  }]);

});
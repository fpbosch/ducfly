define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('MenusEditCtrl', ['$scope', '$routeParams', 'pagesService', function ($scope, $routeParams, itemService) {

  	//$scope.title='';
  	//$scope.body='';
  	//$scope.order=0;

  	var result = itemService.getOne($routeParams.itemId).success(function(data) {
		//console.log(pages);
		console.log(data);
		$scope.item = data;
	}).error(function (data) {
		alert('Houston, we got a problem!');
	});

	$scope.ok = function(id, title, body, order) {
  		
		var formData = {
			'title':title,
			'body':body,
			'order':order
		};

		var result = itemService.update(id, formData).success(function(item) {
			$scope.result = item;
		}).error(function (data) {
			alert('Houston, we got a problem!');
		});
	
	}

	$scope.publish = function(id) {
  		
  		var formData = {
  		};

		var result = itemService.publish(id, formData).success(function(item) {
			console.log(item);
			$scope.result = item;
		}).error(function (data) {
			alert('Houston, we got a problem!');
		});
	
	}


  }]);

});
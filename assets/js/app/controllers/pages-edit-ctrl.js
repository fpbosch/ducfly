define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('PagesEditCtrl', ['$scope', '$routeParams', 'pagesService', function ($scope, $routeParams, pagesService) {

  	var result = pagesService.getOne($routeParams.pageId).success(function(data) {
		//console.log(pages);
		$scope.page = data;
	}).error(function (data) {
		alert('Houston, we got a problem!');
	});

	$scope.ok = function(id, title, body) {
  		console.log('El body: '+body);
		var result = pagesService.update(id, title, body).success(function(page) {
			$scope.result = page;
		}).error(function (data) {
			alert('Houston, we got a problem!');
		});
	
	}



  }]);

});
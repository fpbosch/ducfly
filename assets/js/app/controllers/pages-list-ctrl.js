define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('PagesListCtrl', ['$scope', 'pagesService', function ($scope, pagesService) {

	var result = pagesService.getAll().success(function(pages) {
		console.log(pages);
		$scope.pages = pages;
	}).error(function (data) {
		alert('Houston, we got a problem!');
	});

  }]);

});
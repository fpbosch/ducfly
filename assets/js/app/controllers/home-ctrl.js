define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('HomeCtrl', ['$scope', '$modal', '$sanitize', 'pagesService', function ($scope, $modal, $sanitize, itemService) {

    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;

    //Get all front pages
	var result = itemService.getAllFr().success(function(items) {

        console.log('called the service: '+items);		
		$scope.items = items;

		for (var i = 0; i < $scope.items.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.items[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.items[i]);
            }
        }

	}).error(function (data) {
		alert('Houston, we got a problem!');
	});

  }]);

});
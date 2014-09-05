define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('HomeCtrl', ['$rootScope','$scope', '$modal', '$sanitize', 'pagesService', 'menusService', function ($rootScope, $scope, $modal, $sanitize, pagesService, menusService) {

    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;

    //Get all front pages
    var menusResult = menusService.getAll().success(function(items) {

        $scope.menus = items;

    }).error(function (data) {
    
        alert('Houston, we got a problem!');
    
    });


    //Get all front pages
	var pagesResult = pagesService.getAllFr().success(function(items) {

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
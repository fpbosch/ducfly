define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('HomeCtrl', ['$rootScope','$scope', '$modal', '$sanitize', 'pagesService', 'menusService', function ($rootScope, $scope, $modal, $sanitize, pagesService, menusService) {

    $scope.showPreloader = true;
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;

    $scope.discoverClicked = function() {
        console.log('discover clicked');
    }

    //Get all menu pages
    var menusResult = menusService.getAll().success(function(items) {
    
        $scope.menus = items;

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

            $scope.showPreloader = false;
    
        }).error(function (data) {
            alert('Houston, we got a problem!');
        });

    }).error(function (data) {
    
        alert('Houston, we got a problem!');
    
    });

  }]);

});
define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('PagesListCtrl', ['$scope', '$modal', 'pagesService', function ($scope, $modal, pagesService) {

	$scope.sortingOrder = 'title';
    $scope.reverse = false;
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;

	var result = pagesService.getAll().success(function(data) {
		//console.log(data);
		$scope.items = data;

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

	$scope.deleteInfo = function(id) {
  
		var modalInstance = $modal.open({
        	templateUrl: 'js/app/partials/pages/delete-dlg.html',
		    controller: DeleteInstanceCtrl,
		    size: 'xs',
		    resolve: {
		           
		    }
		});

		modalInstance.result.then(function (data) {

			var result = pagesService.deleteInfo(id).success(function(data) {
				$scope.result = data;
			}).error(function (data) {
				alert('Houston, we got a problem!');
			});
			        
		}, function () {

			console.log('Dialog canceled!!!!!');

	    });

	};

	$scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };
    
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
            $scope.currentPage++;
        }
    };
    
    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };


	$scope.sort_by = function(newSortingOrder) {
      
        if ($scope.sortingOrder == newSortingOrder)
            $scope.reverse = !$scope.reverse;

        $scope.sortingOrder = newSortingOrder;

        // icon setup
        /*$('th i').each(function(){
            $(this).removeClass().addClass('icon-sort');
        });
        if ($scope.reverse)
            $('th.'+new_sorting_order+' i').removeClass().addClass('icon-chevron-up');
        else
            $('th.'+new_sorting_order+' i').removeClass().addClass('icon-chevron-down');*/
    
    };

	$scope.range = function (start, end) {
    
        var ret = [];
    
        if (!end) {
            end = start;
            start = 0;
        }
    
        for (var i = start; i < end; i++) {
            ret.push(i);
        }
    
        return ret;
    
    };

    // calculate page in place
    $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
            }
        }
    };
    
    var DeleteInstanceCtrl = function ($scope, $sce,$http, $modalInstance, pagesService) {

      $scope.ok = function () {

		/*var result = pagesService.deleteInfo(id).success(function(data) {
			$scope.result = data;
		}).error(function (data) {
			alert('Houston, we got a problem!');
		});*/

        $modalInstance.close();

      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };

    };



  }]);

});
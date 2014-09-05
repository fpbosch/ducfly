define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('CategoriesListCtrl', ['$scope', '$sails', '$modal', 'categoriesService', function ($scope, $sails, $modal, itemService) {

	$scope.sortingOrder = 'title';
    $scope.reverse = false;
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    $scope.items = [];

	var result = itemService.getAll().success(function(data) {
		//console.log(data);
		$scope.items = data;

        $scope.assignPagedItems($scope.items);

	}).error(function (data) {
		alert('Houston, we got a problem!');
	});

    $scope.assignPagedItems= function(items) {

        if (items.length>0) {
        for (var i = 0; i < $scope.items.length; i++) {
            console.log('PASSEM PER AQUI');
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.items[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.items[i]);
            }
        }
        } else {
             $scope.pagedItems=[];
        }

    }

    $scope.toggled = function(open) {
        console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.ok = function(name, slug, parent, description) {

        var formData = {
            'name':name,
            'slug':slug,
            'parent':parent,
            'description':description
        };

        var result = itemService.create(formData).success(function(item) {

            $scope.result = item;

        }).error(function (data) {
            alert('Houston, we got a problem!');
        });
    
    }

	$scope.deleteInfo = function(id) {
  
		var modalInstance = $modal.open({
        	templateUrl: 'js/app/partials/delete-dlg.html',
		    controller: DeleteInstanceCtrl,
		    size: 'xs',
		    resolve: {
		           
		    }
		});

		modalInstance.result.then(function (data) {

			var result = itemService.destroy(id).success(function(data) {
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
    
    var DeleteInstanceCtrl = function ($scope, $sce, $http, $modalInstance) {

      $scope.okDelete = function (id) {

        $modalInstance.close();

      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };

    };

    $scope.addRow = function(item) { 
        console.log('ITEM TO PUSH: '+JSON.stringify(item));
        $scope.items.push(item); 
        $scope.assignPagedItems($scope.items);
    }

    $scope.updateRow = function(item) { 
        console.log('ITEM TO PUSH: '+JSON.stringify(item));
        
        for(var aux in $scope.items) {

            if ($scope.items[aux].id==item.id) {
                $scope.items[aux] = item;
                $scope.assignPagedItems($scope.items);
                break;
            }       
        

        }
    }

    $scope.destroyRow = function(id) {

        console.log('ITEM TO DESTROY: '+JSON.stringify(id));
        
        for(var aux in $scope.items) {

            if ($scope.items[aux].id==id) {
                console.log('REMOVE ITEM: '+aux);
                $scope.items.splice(aux,1);
                
                $scope.assignPagedItems($scope.items);
                
                break;
            }       
        }
    }


    $sails.on("categories", function (message) {

        console.log(message);


        if (message.verb === "updated") {
            $scope.updateRow(message.data);
            console.log('CALLED SOCKET TO UPDATE A CATEGORY!!!!: '+JSON.stringify(message));
            //$scope.bars.push(message.data);
        }

        if (message.verb === "created") {
            console.log('CALLED SOCKET TO CREAT A CATEGORY!!!!: '+JSON.stringify(message));
            $scope.addRow(message.data);
            //$scope.bars.push(message.data);
        }

        if (message.verb === "destroyed") {
            //$scope.destroyRow(message.data);
            console.log('CALLED SOCKET TO DESTROY A CATEGORY!!!!: '+JSON.stringify(message));
            $scope.destroyRow(message.id);
            
            //$scope.bars.push(message.data);
        }

    });


  }]);

});
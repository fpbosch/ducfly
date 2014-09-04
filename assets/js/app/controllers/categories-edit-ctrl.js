define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('CategoriesEditCtrl', ['$scope','$routeParams', '$sails', '$modal', 'categoriesService', function ($scope, $routeParams, $sails, $modal, itemService) {

	$scope.sortingOrder = 'title';
    $scope.reverse = false;
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;


	var result2 = itemService.getAll().success(function(data) {
		//console.log(data);
        console.log('ITEMS ESCOLLIT: '+JSON.stringify(data));
        
        $scope.items = data;
        $scope.assignPagedItems($scope.items);
        //$scope.element = data[0];
           
        var result = itemService.getOne($routeParams.itemId).success(function(data2) {
            
            var auxArr = [];
            auxArr[0] = data2;
            
            console.log(data2);
            console.log(data2[0]);
            console.log(auxArr[0]);
            console.log(data[0]);
            
            $scope.selectedItem = data2;
            //$scope.element = data2[0];
            //$scope.element = auxArr[0];
            //$scope.element = data[0];

            $scope.element = _.find($scope.items, function (item) {
                console.log('************** '+data2.parent+' '+JSON.stringify(item));
                return item.name === data2.parent;
            });

            //$scope.item = data2;
            console.log($scope.element);

        }).error(function (data) {
            alert('Houston, we got a problem!');
        });

	}).error(function (data) {
		alert('Houston, we got a problem!');
	});

    $scope.assignPagedItems= function(items) {

        if (items.length>0) {
            $scope.pagedItems = []; //Clean this array
            for (var i = 0; i < $scope.items.length; i++) {
                console.log($scope.items[i]);
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

    $scope.ok = function(id, name, slug, parent, description) {

        console.log('EL PARENT: '+parent);

        var formData = {
            'name':name,
            'slug':slug,
            'parent':parent,
            'description':description
        };
        
        var result = itemService.update(id, formData).success(function(item) {
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
    
    var DeleteInstanceCtrl = function ($scope, $sce,$http, $modalInstance, pagesService) {

      $scope.okDelete = function () {

        $modalInstance.close();

      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };

    };

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

        console.log('ITEM TO REMOVE: '+JSON.stringify(id));
        
        for(var aux in $scope.items) {

            if ($scope.items[aux].id==id) {
    
                console.log('YES FOUND ITEM TO REMOVE: '+JSON.stringify(id));
    
                $scope.items.splice(aux,1);
                $scope.assignPagedItems($scope.items);
                break;

            }       
        
        }
    }

    $scope.addRow = function(item) { 
        console.log('ITEM TO PUSH: '+JSON.stringify(item));
        $scope.items.push(item); 
        $scope.assignPagedItems($scope.items);
    }

   
    $sails.on("categories", function (message) {
        
        if (message.verb === "updated") {
            $scope.updateRow(message.data);
            console.log('CALLED SOCKET TO UPDATE A CATEGORY!!!!: '+JSON.stringify(message));
        }

        if (message.verb === "destroyed") {
        
            console.log('CALLED SOCKET TO DESTROY A CATEGORY!!!!: '+JSON.stringify(message));
            $scope.destroyRow(message.id);
            
        }

    });


  }]);

});
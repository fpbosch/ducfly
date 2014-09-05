define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('MenusListCtrl', ['$scope', '$modal', 'pagesService', 'categoriesService', 'menusService', function ($scope, $modal, pagesService, categoriesService, menusService) {

	$scope.sortingOrder = 'title';
    $scope.reverse = false;
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    
	var result = pagesService.getAll().success(function(data) {
		//console.log(data);
		$scope.pages = data;

		for (var i = 0; i < $scope.pages.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.pages[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.pages[i]);
            }
        }

	}).error(function (data) {
		alert('Houston, we got a problem!');
	});

    var result2 = categoriesService.getAll().success(function(data) {
        $scope.categories = data;
    }).error(function (data) {
        alert('Houston, we got a problem!');
    });

    var result3 = menusService.getAll().success(function(data) {
        console.log('PASSEM PER AQUI: '+JSON.stringify(data));
        $scope.menus = data;
    }).error(function (data) {
        alert('Houston, we got a problem!');
    });

    //Add a category to the menu
    $scope.addCategory = function(id) {
     
        var menu = _.find($scope.categories, function (item) {
            //console.log('************** '+data2.parent+' '+JSON.stringify(item));
            return item.id === id;
        
        });

        console.log(menu);

        menu.label = menu.name;
        menu.originalLabel = menu.name;
        menu.type = 'category';

        $scope.menus.push(menu);
   
    }

    //Add a category to the menu
    $scope.addPage = function(id) {
     
        var menu = _.find($scope.pages, function (item) {
            //console.log('************** '+data2.parent+' '+JSON.stringify(item));
            return item.id === id;
        
        });

        menu.label = menu.title;
        menu.originalLabel = menu.title;
        menu.type = 'page';
        //delete menu.title;
        //console.log(menu);
        $scope.menus.push(menu);
   
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
    
    /*
    *   
    *   This saves the menu data to the web server
    *   
    */
    $scope.saveMenu = function (menus) {

        var menPosition = 'menu1'; //This is a fixed value in the future it comes from an installed template

        //First delete all menus at this position
        //If no items ara found on the server
        //will launch an error
        console.log(JSON.stringify(menus));

        var result = menusService.destroyByPosition(menPosition).success(function(data) {
            
            $scope.createMenus(menus, menPosition);
        
        }).error(function (data) {
            
            $scope.createMenus(menus, menPosition);

        });    

    };
    
    $scope.createMenus = function(menus, menPosition) {

        for (var aux=0 in menus) {

            delete menus[aux].$$hashKey;
            //auxMenu.push(menus[aux]);
            var menu = {};

            //We just set the params we need
            menu.type = menus[aux].type;
            menu.position=menPosition;
            menu.label = menus[aux].label;
            menu.originalLabel = menus[aux].originalLabel;
            menu.titleAttribute = menus[aux].titleAttribute;
            menu.contentId = menus[aux].id;
            menu.order = aux;
                
            console.log('EL MENU GENERAT: '+JSON.stringify(menu));
                
            var result2 = menusService.create(menu).success(function(data) {
                //$scope.categories = data;
            }).error(function (data) {
                alert('Houston 1, we got a problem!');
            });

        }
        
    }

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
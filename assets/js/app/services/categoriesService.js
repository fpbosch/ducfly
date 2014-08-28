define(['./module'], function (services) {
	'use strict';
  services.service('categoriesService', function ($http, $sails, localUrl) {

  		var getAll = function() {

  			return $sails.get(localUrl+"/categories")
		      .success(function (data) {
		        //$scope.bars = data;
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      });
	  	
		};

		var getOne = function(_Id) {

  			return $sails.get(localUrl+"/categories/"+_Id)
		      .success(function (data) {
		        //$scope.page = data;
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      });
			  	
		};

		var create = function(formData) {

  			return $sails.post(localUrl+"/categories", formData)
		      .success(function (data) {
		        //$scope.bars = data;
		      
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      
		      });

		};

		var update = function(_id, formData) {

  			return $sails.put(localUrl+"/categories/"+_id, formData)
		      .success(function (data) {
		        //$scope.bars = data;
		      
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      
		      });

		};

		var destroy = function(_Id) {

  			return $sails.delete(localUrl+"/categories/"+_Id)
		      .success(function (data) {
		        //$scope.page = data;
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
			});
			  	
		};

		var publish = function(_id, formData) {

  			return $sails.put(localUrl+"/categories/publish/"+_id, formData)
		      .success(function (data) {
		        //$scope.bars = data;
		      
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      
		      });
		  	
		};

		var getAllFr = function() {

  			return $sails.get(localUrl+"/Frontcategories/getAllFr")
		      .success(function (data) {
		        //$scope.bars = data;
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      });
			  	
		};

		var categoriesService = {
			getAll:getAll,
			getOne:getOne,
			create:create,
			update:update,
			destroy:destroy,
			publish:publish,
			getAllFr:getAllFr,
		};

		return categoriesService;

  });
  	
});
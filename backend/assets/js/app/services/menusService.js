define(['./module'], function (services) {
	'use strict';
  	services.service('menusService', function ($http, $sails, localUrl) {
  	//services.service('menusService', function ($http, localUrl) {

  		var getAll = function() {

  			var formData = {};

			formData.access_token = "90388d57-a2b0-4a10-ad78-3d97c518a3f7";
	  		console.log('PASSEM PER AQUI TAMBÉ');	
  			return $sails.get(localUrl+"/menus", formData)
		      .success(function (data) {
		        //$scope.bars = data;
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		    });
		  
		};

		var getOne = function(_Id) {

			var formData = {};

			formData.access_token = "90388d57-a2b0-4a10-ad78-3d97c518a3f7";

  			return $sails.get(localUrl+"/menus/"+_Id, formData)
		      .success(function (data) {
		        //$scope.page = data;
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      });
			  	
		};

		var create = function(formData) {

			formData.access_token = "90388d57-a2b0-4a10-ad78-3d97c518a3f7";

			console.log(JSON.stringify(formData));
			
  			return $sails.post(localUrl+"/menus", formData)
		      .success(function (data) {
		        //$scope.bars = data;
		      
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      
		      });

		};

		var update = function(_id, formData) {

			formData.access_token = "90388d57-a2b0-4a10-ad78-3d97c518a3f7";
			
  			return $sails.put(localUrl+"/menus/"+_id, formData)
		      .success(function (data) {
		        //$scope.bars = data;
		      
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      
		      });

		};

		var destroyByPosition = function(_position) {

			var formData = {};

  			formData.access_token = "90388d57-a2b0-4a10-ad78-3d97c518a3f7";
			
  			return $sails.delete(localUrl+"/menus/destroyByPosition/"+_position, formData)
		      .success(function (data) {
		        //$scope.page = data;
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
			});
			  	
		};


		var destroy = function(_Id) {

			var formData = {};

  			formData.access_token = "90388d57-a2b0-4a10-ad78-3d97c518a3f7";
			
  			return $sails.delete(localUrl+"/menus/"+_Id, formData)
		      .success(function (data) {
		        //$scope.page = data;
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
			});
			  	
		};

		var menusService = {
			getAll:getAll,
			getOne:getOne,
			create:create,
			update:update,
			destroy:destroy,
			destroyByPosition:destroyByPosition,	
		};

		return menusService;

  });
  	
});
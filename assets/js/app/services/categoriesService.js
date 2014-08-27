define(['./module'], function (services) {
	'use strict';
  services.service('categoriesService', function ($http, $sails, localUrl) {

  		console.log('CONSTANT LOCAL URL: '+localUrl);

  		var getAll = function() {

  			return $sails.get(localUrl+"/categories")
		      .success(function (data) {
		        //$scope.bars = data;
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      });


		    $sails.on("message", function (message) {
		    
		      if (message.verb === "create") {
		        //$scope.bars.push(message.data);
		      }
		    
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

		    $sails.on("message", function (message) {
		    
		      if (message.verb === "create") {
		        //$scope.bars.push(message.data);
		      }
		    
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

		    $sails.on("message", function (message) {
		    
		      if (message.verb === "create") {
		        //$scope.bars.push(message.data);
		      
		      }
		    
		    });
		  	
		};

		var update = function(_id, formData) {

			console.log(formData);

  			return $sails.put(localUrl+"/categories/"+_id, formData)
		      .success(function (data) {
		        //$scope.bars = data;
		      
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
		      
		      });


		    $sails.on("message", function (message) {
		    
		      if (message.verb === "create") {
		        //$scope.bars.push(message.data);
		      
		      }
		    
		    });
		  	
		};

		var deleteInfo = function(_Id) {

  			return $sails.delete(localUrl+"/categories/"+_Id)
		      .success(function (data) {
		        //$scope.page = data;
		      })
		      .error(function (data) {
		        //alert('Houston, we got a problem!');
			});

		    $sails.on("message", function (message) {
		    
		      if (message.verb === "create") {
		        //$scope.bars.push(message.data);
		      }
		    
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


		    $sails.on("message", function (message) {
		    
		      if (message.verb === "create") {
		        //$scope.bars.push(message.data);
		      
		      }

		      if (message.verb === "update") {
		      	console.log("model update by socket");
		        //$scope.bars.push(message.data);
		      
		      }
		    
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


		    $sails.on("message", function (message) {
		    
		      if (message.verb === "create") {
		        //$scope.bars.push(message.data);
		      }
		    
		    });
			  	
		};

		var categoriesService = {
			getAll:getAll,
			getOne:getOne,
			create:create,
			update:update,
			deleteInfo:deleteInfo,
			publish:publish,
			getAllFr:getAllFr,
		};

		return categoriesService;

  });
  	
});
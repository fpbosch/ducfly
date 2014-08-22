define(['./module'], function (services) {
	'use strict';
  services.service('pagesService', function ($http, $sails) {

  		var getAll = function() {

  			return $sails.get("http://localhost:1337/pages")
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

  			return $sails.get("http://localhost:1337/pages/"+_Id)
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

  			return $sails.post("http://localhost:1337/pages", formData)
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

  			return $sails.put("http://localhost:1337/pages/"+_id, formData)
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

  			return $sails.delete("http://localhost:1337/pages/"+_Id)
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

  			return $sails.put("http://localhost:1337/pages/publish/"+_id, formData)
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

  			return $sails.get("http://localhost:1337/FrontPages/getAllFr")
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

		var pagesService = {
			getAll:getAll,
			getOne:getOne,
			create:create,
			update:update,
			deleteInfo:deleteInfo,
			publish:publish,
			getAllFr:getAllFr,
		};

		return pagesService;

  });
  	
});
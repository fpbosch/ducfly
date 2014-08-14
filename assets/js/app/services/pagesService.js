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

		var create = function(title, body) {

  			return $sails.post("http://localhost:1337/pages",{'title':title, 'body':body})
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

		var update = function(_id, title, body) {

  			return $sails.put("http://localhost:1337/pages/"+_id, {'title':title, 'body':body})
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

		var pagesService = {
			getAll:getAll,
			getOne:getOne,
			create:create,
			update:update,
			deleteInfo:deleteInfo,
		};

		return pagesService;

  });
  	
});
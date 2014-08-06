define(['./module'], function (services) {
	'use strict';
  services.service('pagesService', function ($http, $sails) {

  		var getAll = function() {

  			return $sails.get("http://localhost:1337/pages/getAll")
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

		var save = function(title, body) {

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

		var pagesService = {
			getAll:getAll,
			save:save
		};

		return pagesService;

  });
  	
});
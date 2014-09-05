define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('MyDashboard', ['$scope','$sails', function ($scope, $sails) {

	$scope.bars = [];

  	(function () {
	    $sails.get("http://localhost:1337/dashboard")
	      .success(function (data) {
	        $scope.bars = data;
	      })
	      .error(function (data) {
	        alert('Houston, we got a problem!');
	      });


	    $sails.on("message", function (message) {
	      if (message.verb === "create") {
	        //$scope.bars.push(message.data);
	      }
	    });

  	}());

  }]);

});
define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('LeftAdminMenu', ['$scope', function ($scope) {

  	$scope.showPostOptions='none';
  	$scope.showPageOptions='none';

	$scope.show_post_options = function() {

	  	if ($scope.showPostOptions=='none') 
	  		$scope.showPostOptions='block';
	  	else
	  		$scope.showPostOptions='none';

	};

	$scope.show_page_options = function() {

	  	if ($scope.showPageOptions=='none') 
	  		$scope.showPageOptions='block';
	  	else
	  		$scope.showPageOptions='none';

	};

  }]);

});
define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('LeftAdminMenu', ['$scope', function ($scope) {

  	$scope.showPostOptions='none';
  	$scope.showPageOptions='none';
	$scope.showMediaOptions='none';
	$scope.showAppearanceOptions='none';

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

	$scope.show_media_options = function() {

	  	if ($scope.showMediaOptions=='none') 
	  		$scope.showMediaOptions='block';
	  	else
	  		$scope.showMediaOptions='none';

	};

	$scope.show_appearance_options = function() {

	  	if ($scope.showAppearanceOptions=='none') 
	  		$scope.showAppearanceOptions='block';
	  	else
	  		$scope.showAppearanceOptions='none';

	};



  }]);

});
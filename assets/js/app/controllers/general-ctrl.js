define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('GeneralCtrl', ['$scope', function ($scope) {
  	$scope.theme="theme.css";
  	$scope.hideLeftMenu=true;
  }]);

});
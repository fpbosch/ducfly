define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('PagesListCtrl', ['$scope', 'pagesService', function ($scope, pagesService) {

	pagesService.signup('hola','hola2','hola');

  }]);

});
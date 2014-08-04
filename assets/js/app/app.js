define([
      'angular',
      'angular.route', 
      'angular-sails',
      './controllers/index',
      './directives/index',
      './services/index',
      /*'./directives/index',*/
      /*'./filters/index'*/
  ], function (ng) {
      'use strict';
    
     return ng.module('app', [
        'ngSails',
        'ngRoute',
        'app.controllers',
        'app.directives',
        'app.services',
         // call your 'app.directives',
         // call your 'app.filters',
     ]);
});

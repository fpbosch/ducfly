define([
      'angular',
      'angular.route', 
      'angular-sails',
      'ng-file-upload',
      'angular.ui.bootstrap',
      'angular-sanitize',
      'draganddroplists',
      'underscore',
      'jquery',
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
        'ngSanitize',
        'dndLists',
        'angularFileUpload',
        'ui.bootstrap',
        'app.controllers',
        'app.directives',
        'app.services',
         // call your 'app.directives',
         // call your 'app.filters',
     ]).constant('localUrl', 'http://localhost:1337');
});

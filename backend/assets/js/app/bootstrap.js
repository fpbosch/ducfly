/**
  * bootstraps angular onto the window.document node
*/
define([
     'require',
     'angular',
     'app',
     'routes'
], function (require, ng) {
     'use strict';
 
 	/*ng.element(document).ready(function() {
		ng.bootstrap(document, ['app']);
    });*/
    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
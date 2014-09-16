require.config({

 	// alias libraries paths
	paths: {
		'domReady': '/assets/js/app/lib/requirejs-domready/domReady',
		'angular': '/assets/js/app/lib/angular/angular',
		'angular.route': '/assets/js/app/lib/angular-route/angular-route',
		'jquery': '/assets/js/app/lib/jquery/dist/jquery',
		'getbootstrap': '/assets/js/app/lib/bootstrap/dist/js/bootstrap',
		'angular-sails': '/assets/js/app/lib/angular-sails/dist/angular-sails',
		'angular.ui.bootstrap': '/assets/js/app/lib/angular-bootstrap/ui-bootstrap-tpls.min',
		'angular-sanitize': '/assets/js/app/lib/angular-sanitize/angular-sanitize.min',
		'angulartics': '/assets/js/app/lib/angulartics/dist/angulartics.min',

		/*'sails-socket': '/assets/js/app/lib/sails/socket-io',*/
		/*'sails-io': '/assets/js/app/lib/sails/sails-io',*/
		'sails-io': '/assets/js/app/lib/sails.io.js/dist/sails.io',
		'ng-file-upload-shim': '/assets/js/app/lib/ng-file-upload/angular-file-upload-shim.min',
		'ng-file-upload': '/assets/js/app/lib/ng-file-upload/angular-file-upload.min',		
		'underscore': '/assets/js/app/lib/underscore/underscore-min',		
		'draganddroplists': '/assets/js/app/lib/angular-drag-and-drop-lists/angular-drag-and-drop-lists',		

		/*'textAngular-sanitize':	'/assets/js/app/lib/textAngular/dist/textAngular-sanitize.min',
		'textAngular':	'/assets/js/app/lib/textAngular/dist/textAngular.min'
  		*/
	},// angular does not support AMD out of the box, put it in a shim
	shim: {
		'underscore': {
			exports: '_'
		},
		'angular': {
			exports: 'angular',
		},
		'angulartics': ['angular'],
		'angular.route': ['angular'],
		'getbootstrap': ['jquery'],
		'angular-sanitize': ['angular'],
		'angular.ui.bootstrap': ['angular'],
		'draganddroplists': ['angular'],
		/*'sails-io': ['sails-socket'],*/
		'angular-sails': ['sails-io','angular'],
		'ng-file-upload': ['angular','ng-file-upload-shim']		
		/*'textAngular-sanitize':['angular'],
		'textAngular': ['textAngular-sanitize','angular']
		*/
	},
	// kick start application
	deps: ['./bootstrap']

});

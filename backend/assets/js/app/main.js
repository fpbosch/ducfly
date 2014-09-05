require.config({

 	// alias libraries paths
	paths: {
		'domReady': '/js/app/lib/requirejs-domready/domReady',
		'angular': '/js/app/lib/angular/angular',
		'angular.route': '/js/app/lib/angular-route/angular-route',
		'jquery': '/js/app/lib/jquery/dist/jquery',
		'getbootstrap': '/js/app/lib/bootstrap/dist/js/bootstrap',
		'angular-sails': '/js/app/lib/angular-sails/dist/angular-sails',
		'angular.ui.bootstrap': '/js/app/lib/angular-bootstrap/ui-bootstrap-tpls.min',
		'angular-sanitize': '/js/app/lib/angular-sanitize/angular-sanitize.min',
		/*'sails-socket': '/js/app/lib/sails/socket-io',*/
		'sails-io': '/js/app/lib/sails/sails-io',
		'ng-file-upload-shim': '/js/app/lib/ng-file-upload/angular-file-upload-shim.min',
		'ng-file-upload': '/js/app/lib/ng-file-upload/angular-file-upload.min',		
		'underscore': '/js/app/lib/underscore/underscore-min',		
		'draganddroplists': '/js/app/lib/angular-drag-and-drop-lists/angular-drag-and-drop-lists',		

		/*'textAngular-sanitize':	'/js/app/lib/textAngular/dist/textAngular-sanitize.min',
		'textAngular':	'/js/app/lib/textAngular/dist/textAngular.min'
  		*/
	},// angular does not support AMD out of the box, put it in a shim
	shim: {
		'underscore': {
			exports: '_'
		},
		'angular': {
			exports: 'angular'
		},
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

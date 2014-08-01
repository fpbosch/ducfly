require.config({

 	// alias libraries paths
	paths: {
		'domReady': '../app/lib/requirejs-domready/domReady',
		'angular': '../app/lib/angular/angular',
		'angular.route': '../app/lib/angular-route/angular-route',
		'jquery': '..app/lib/jquery/dist/jquery',
		'getbootstrap': '..app/lib/bootstrap/dist/js/bootstrap',
 
	},// angular does not support AMD out of the box, put it in a shim
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular.route': ['angular'],
		'getbootstrap': ['jquery']

	},
	// kick start application
	deps: ['./bootstrap']

});

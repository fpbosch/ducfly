require.config({

 	// alias libraries paths
	paths: {
		'domReady': '../app/lib/requirejs-domready/domReady',
		'angular': '../app/lib/angular/angular',
		'angular.route': '../app/lib/angular-route/angular-route',
	},// angular does not support AMD out of the box, put it in a shim
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular.route': ['angular']
	},
	// kick start application
	deps: ['./bootstrap']

});

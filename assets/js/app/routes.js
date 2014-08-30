define(['./app'], function (app) {
    'use strict';
      return app.config(['$routeProvider', function ($routeProvider) {

          $routeProvider.when('/', {
            templateUrl: 'js/app/partials/home/index.html',
            controller: 'HomeCtrl'
          });
  
          $routeProvider.when('/signup', {
            templateUrl: 'js/app/partials/signup/new.html',
            controller: 'SignupNewCtrl'
          });
  
          $routeProvider.when('/login', {
            templateUrl: 'js/app/partials/login/new.html',
            controller: 'LoginNewCtrl'
          });

          $routeProvider.when('/dashboard', {
            templateUrl: 'js/app/partials/dashboard.html',
            controller: 'MyDashboard'
          });
  
          $routeProvider.when('/view1', {
            templateUrl: 'js/app/partials/partial1.html',
            controller: 'MyCtrl1'
          });
  
          $routeProvider.when('/view2', {
            templateUrl: 'js/app/partials/partial2.html',
            controller: 'MyCtrl2'
          });

          $routeProvider.when('/categories', {
            templateUrl: 'js/app/partials/categories/list.html',   
            controller: 'CategoriesListCtrl'
          });

          $routeProvider.when('/categories/:itemId/edit', {
            templateUrl: 'js/app/partials/categories/edit.html', 
            controller: 'CategoriesEditCtrl'
          });

          $routeProvider.when('/pages', {
            templateUrl: 'js/app/partials/pages/list.html',   
            controller: 'PagesListCtrl'
          });

          $routeProvider.when('/pages/:itemId/edit', {
            templateUrl: 'js/app/partials/pages/edit.html', 
            controller: 'PagesEditCtrl'
          });

          $routeProvider.when('/pages/new', {
            templateUrl: 'js/app/partials/pages/new.html', 
            controller: 'PagesNewCtrl'
          });

          $routeProvider.when('/media', {
            templateUrl: 'js/app/partials/media/list.html',   
            controller: 'MediaListCtrl'
          });

          $routeProvider.when('/media/:itemId/edit', {
            templateUrl: 'js/app/partials/media/edit.html', 
            controller: 'MediaEditCtrl'
          });

          $routeProvider.when('/media/new', {
            templateUrl: 'js/app/partials/media/new.html', 
            controller: 'MediaNewCtrl'
          });

          $routeProvider.when('/menus', {
            templateUrl: 'js/app/partials/menus/list.html',   
            controller: 'MenusListCtrl'
          });

          $routeProvider.when('/menus/:itemId/edit', {
            templateUrl: 'js/app/partials/menus/edit.html', 
            controller: 'MenusEditCtrl'
          });

          $routeProvider.when('/menus/new', {
            templateUrl: 'js/app/partials/menus/new.html', 
            controller: 'MenusNewCtrl'
          });

 
          $routeProvider.otherwise({
             redirectTo: '/view1'
          });
     }]);
});
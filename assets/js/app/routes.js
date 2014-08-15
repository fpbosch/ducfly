define(['./app'], function (app) {
    'use strict';
      return app.config(['$routeProvider', function ($routeProvider) {

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

          $routeProvider.when('/pages', {
            templateUrl: 'js/app/partials/pages/pages-list.html',   
            controller: 'PagesListCtrl'
          });

          $routeProvider.when('/pages/:itemId/edit', {
            templateUrl: 'js/app/partials/pages/pages-edit.html', 
            controller: 'PagesEditCtrl'
          });

          $routeProvider.when('/pages/new', {
            templateUrl: 'js/app/partials/pages/pages-new.html', 
            controller: 'PagesNewCtrl'
          });


 
          $routeProvider.otherwise({
             redirectTo: '/view1'
          });
     }]);
});
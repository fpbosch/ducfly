define(['./module'], function (directives) {
	'use strict';
  directives.directive('navigation', [function () {
  	return {
			restrict: 'AE',
			controller: ['$scope', function($scope) {

			}],
			transclude: true,
			replace: true,
			link: function(scope, element, attrs) {
				/*if (!topmenu) {
					if (!null) {
						element.first().jarvismenu({
							accordion : true,
							speed : $.menu_speed,
							closedSign : '<em class="fa fa-plus-square-o"></em>',
							openedSign : '<em class="fa fa-minus-square-o"></em>'
						});
					} else {
						alert("Error - menu anchor does not exist");
					}
				}

				// SLIMSCROLL FOR NAV
				if ($.fn.slimScroll) {
					element.slimScroll({
				        height: '100%'
				    });
				}

				scope.getElement = function() {
					return element;
				}*/
			},
			template: '<nav><ul data-ng-transclude=""></ul></nav>'
		};
  }])
	.controller('NavGroupController', ['$scope', function($scope) {
		$scope.active = false;
		$scope.hasIcon = angular.isDefined($scope.icon);
	    $scope.hasIconCaption = angular.isDefined($scope.iconCaption);

	    this.setActive = function(active) {
	    	$scope.active = active;
	    }

	}])
	
  .directive('navGroup', function() {
		return {
			restrict: 'AE',
			controller: 'NavGroupController',
			transclude: true,
			replace: true,
			scope: {
				icon: '@',
				title: '@',
				iconCaption: '@',
				active: '=?'
			},
			template: '\
				<li data-ng-class="{active: active}">\
					<a href="">\
						<i data-ng-if="hasIcon" class="{{ icon }}"><em data-ng-if="hasIconCaption"> {{ iconCaption }} </em></i>\
						<span class="menu-item-parent" data-localize="{{ title }}">{{ title }}</span>\
					</a>\
					<ul data-ng-transclude=""></ul>\
				</li>',

		};
	});

});
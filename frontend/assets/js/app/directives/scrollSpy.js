define(['./module'], function (directives) {
	'use strict';
  	directives.directive('scrollSpy',['$window',function($window) {
		return {
		    restrict: 'A',
		    controller: function ($scope) {
		      $scope.spies = [];
		      this.addSpy = function (spyObj) {
		      	console.log('spyObj: '+JSON.stringify(spyObj));
		        $scope.spies.push(spyObj);
		      };
		    },
		    link: function (scope, elem, attrs) {
		      var spyElems;
		      spyElems = [];

		      scope.$watch('spies', function (spies) {
		      	console.log('spies: '+spies);
		        var spy, _i, _len, _results;
		        _results = [];

		        for (_i = 0, _len = spies.length; _i < _len; _i++) {
		          spy = spies[_i];

		          if (spyElems[spy.id] == null) {
		            _results.push(spyElems[spy.id] = elem.find('#' + spy.id));
		          }
		        }
		        return _results;
		      });

		      $(window).scroll(function() {
				    if ($(window).scrollTop() > 500) {
				        $('.navbar').addClass('fixednav');
				    } else {
				    	$('.navbar').removeClass('fixednav');
				    }
				});


		      $($window).scroll(function () {
		      	console.log('YES SCROLL');
		        var highlightSpy, pos, spy, _i, _len, _ref;
		        highlightSpy = null;
		        _ref = scope.spies;

		        // cycle through `spy` elements to find which to highlight
		        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
		          spy = _ref[_i];
		          spy.out();

		          // catch case where a `spy` does not have an associated `id` anchor
		          if (spyElems[spy.id].offset() === undefined) {
		            continue;
		          }

		          if ((pos = spyElems[spy.id].offset().top) - $window.scrollY <= 0) {
		            // the window has been scrolled past the top of a spy element
		            console.log('ENTREM AQUÍ');
		            spy.pos = pos;

		            if (highlightSpy == null) {
		              highlightSpy = spy;
		            }
		            if (highlightSpy.pos < spy.pos) {
		              highlightSpy = spy;
		            }
		          }
		        }

		        // select the last `spy` if the scrollbar is at the bottom of the page
		        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
		          spy.pos = pos;
		          highlightSpy = spy;
		        }        

		        return highlightSpy != null ? highlightSpy["in"]() : void 0;
		      });
		    }
		  };
	}]).
	directive('spy', ['$window', '$location', '$anchorScroll', function($window, $location, $anchorScroll) {
		
		return {
		    restrict: "A",
		    require: "^scrollSpy",
		    link: function(scope, elem, attrs, affix) {
		      elem.click(function () {
		      	console.log(attrs.spy);
		        $location.hash(attrs.spy);
		        $anchorScroll();
		      });

		      affix.addSpy({
		        id: attrs.spy,
		        in: function() {
		        	console.log('A DINS');
		          	elem.addClass('current');
		        },
		        out: function() {
		        	console.log('A FORA');
		        	elem.removeClass('current');
		        }
		      });
		    }
		};

  	}]);	

});
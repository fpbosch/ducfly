define(['./module'], function (directives) {
	'use strict';
  	directives.controller('MacaretaController', ['$scope','$modal', '$window','$document',function($scope, $modal, $window, $document) {

  		$scope.clickedElement='Element';
  		$scope.previewEdit='';
  		$scope.myModel='';
    	$scope.editorEnabled = true;
  		//$scope.myModel='ostia';

  		//var _tagH1 = document.createElement("h1");
  		var _tagH1='h1';
  		var _tagH2='h2';
  		var _tagH3='h3';
		var _tagH4='h4';
		var _tagH5='h5';
		var _tagH6='h6';
		var _tagH6='p';

		var sel='';

		if($window.getSelection){
    		sel = $window.getSelection();
  		}else if($document.getSelection){
    		sel = $document.getSelection();
  		}else if($document.selection){
    		sel = $document.selection.createRange().text;
  		}

		    /*	if ($window.getSelection) {
		        	console.log('window getSelection');
		        	t = $window.getSelection();
		    	}

		        if ($document.getSelection) {
		        	console.log('document getSelection');
					t = $document.getSelection();		        
		        }
		    */
		var wrapSelection = function(_tag) {
			var range='';
	    	//sel = $window.getSelection();
	        if (sel.rangeCount) {
	            range = sel.getRangeAt(0);
	            
	            //range.deleteContents();
	            range.surroundContents(document.createElement(_tag));
	        }
		};

  		$scope.cmd_wrap = function(_tag) {

  			console.log('wrap clicked: '+_tag);
	    	$scope.clickedElement = _tag;

	    	wrapSelection(_tag);

	    };

		$scope.cmd_img = function(_tag) {

  			console.log('wrap clicked: '+_tag);
	    	$scope.clickedElement = _tag;

	    	var range='';
	    	//sel = $window.getSelection();
	        if (sel.rangeCount) {
	            range = sel.getRangeAt(0);
	          	console.log('A dins');  
	            //range.insertContents('gjjgjg');
	            var imgContent = document.createElement('img');
	            imgContent.src="/img/iphone5_two.png";
	            range.surroundContents(imgContent);
	        }

	    	//range.appendContents('HELLO');
	    	//wrapSelection(_tag);

	    };


		$scope.edit_html = function() {

			$scope.editorEnabled = !$scope.editorEnabled;
  		
  			console.log('edit_html clicked');
	    
	    };


	    $scope.cmd_show_modal = function() {

	    	console.log('cmd modal clicked');
			$scope.clickedElement = 'cmd_show_modal';
	    	    
  			var modalInstance = $modal.open({
        		template: '<p>HOLA</p>',
		        /*controller: SignupInstanceCtrl,*/
		        size: 'xs',
		        resolve: {
		           
		        }
		     });

  			//console.log('cmd modal clicked');
	    
	    };


	    /*$scope.$watch('myField',
			function(newVal, oldVal, scope) {
				console.log('A dins');
	    		scope.previewEdit=newVal;

	    	}
	    );*/

	}])
 	.directive('macareta',['$window','$document','$sce',function($window, $document, $compile, $sce) {
		return {
			restrict: 'E',
			controller: 'MacaretaController',
			//transclude: true,
			//replace: false,
			scope: {
				myModel: '=myModelAttr', // MODIFIED
      		},
			templateUrl: 'js/app/partials/macareta.html', 
			link: function(scope, element, attrs, ngModel) {
    
				var deviceListElement = angular.element(element);
				var textField = deviceListElement.find('textarea');
		        textField.attr('ng-model', attrs.myModelAttr);
			
				/*var chucknorris = document.createElement("h1");

				var t='';

		        /if ($window.getSelection) {
		        	console.log('window getSelection');
		        	t = $window.getSelection();
		        }

		        if ($document.getSelection) {
		        	console.log('document getSelection');
					t = $document.getSelection();
		        		        
		        }*/


		        $document.find('textarea').on('mousemove', function(){
		        	console.log('YES MOUSE MOVE');
		        });


 				scope.$watch('myModel', function() {
					
					console.log('myModel watch');
					var laCapa = deviceListElement.find('span');
					laCapa.html(textField.val());
				
				});

 				/*scope.$watch('myModel2', function() {
					
					console.log('myModel 2 watch');
					var laCapa = deviceListElement.find('<div style="min-height:300px;border:1px solid #CCC;" contenteditable="true" ng-model="myModel2" rows="3" class="custom-scroll"></div>');
					laCapa.text(textField.val());
					scope.myModel = scope.myModel2;
				});


 				element.on('keyup', function(event, eventData){
					
 					if (document.activeElement && 
                        (document.activeElement.tagName.toLowerCase () == "textarea" || 
                         document.activeElement.tagName.toLowerCase () == "input")) 
                	{
						scope.myModel2 = document.activeElement.value;
						console.log('THE KEY UP ON TEXTAREA');
					}
	
				});*/

 				/*element.on('mousedown', function(event, eventData){
					console.log('MOUSE DOWN');
				});*/

 				/*element.on('mouseup', function(event, eventData){
					console.log('MOUSE UP');				
				});*/

				/*scope.onTextClick = function ($event) {
  					
					console.log('onTextClick');
				
				};*/

		    }
		};
	}]).
	directive('contenteditable', ['$sce', function($sce) {
	    return {
	      restrict: 'A', // only activate on element attribute
	      require: '?ngModel', // get a hold of NgModelController
	      link: function(scope, element, attrs, ngModel) {
	        if(!ngModel) return; // do nothing if no ng-model

	        // Specify how UI should be updated
	        ngModel.$render = function() {
	        
	          //element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
	        	element.html(ngModel.$viewValue || '');
	        
	        };

	        // Listen for change events to enable binding
	        element.on('blur keyup change', function() {
	          scope.$apply(read);
	        });

	        read(); // initialize

	        // Write data to the model
	        function read() {
	          var html = element.html();
	          // When we clear the content editable the browser leaves a <br> behind
	          // If strip-br attribute is provided then we strip this out
	          if( attrs.stripBr && html == '<br>' ) {
	            html = '';
	          }
	          ngModel.$setViewValue(html);
	        }
	      }
	    };
  	}]);	

});
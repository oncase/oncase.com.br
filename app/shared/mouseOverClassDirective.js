(function(){

	angular.module("mouseOverClass",[]).

	directive('mouseOverClass',function(){
	    return {
	      restrict: 'A',
	      link: function (scope, elm, attrs) {

	        var classToAdd = elm.attr("mouse-over-class");
	        
	        elm.on('mouseover', function (evt) {
	          elm.addClass(classToAdd);
	        }).on('mouseout', function (evt) {
	          elm.removeClass(classToAdd);
	        });

	      }
    	};

	});
})();
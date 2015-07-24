(function(){

	angular.module("pageTransitionDirective",[]).

	directive('pageTransition',['$rootScope',function($rootScope){
	    return {
	      restrict: 'A',
	      link: function (scope, elm, attrs) {

		      scope.isRouteLoading = false;

		      $rootScope.$on('$routeChangeStart', function(){
		        scope.isRouteLoading = true;
		      });

		      $rootScope.$on('$routeChangeSuccess', function(){
		        scope.isRouteLoading = false;
		      });

	      }
    	};

	}]);
})();
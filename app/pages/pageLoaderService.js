(function(){

	angular.module('oncasePages').
	factory('pageLoaderService',['$timeout',
		function($timeout){
			_timeout = $timeout;
			return {
				getContent : function(){
					return _timeout(function(){
						return true;
					},2000);
				}
			};

	}]);


})();
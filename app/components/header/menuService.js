(function(){

	angular.module('headerModule').
	factory('menuService',['$location','$window','$timeout','jumboBackgroundService',
		function($location,$window,$timeout,jumboBackgroundService){

		var _selectedIndex = 0;

		var _indexMap = {
			"/" : 0,
			"/about" : 1,
			"/services" : 2,
			"/products" : 3,
			"/clients-and-partners" : 4,
			"/contact" : 5
		};

		var _getRouteForIndex = function(idx){
			return idx < Object.keys(_indexMap).length 
					? Object.keys(_indexMap)[idx]
					: Object.keys(_indexMap)[0] ;
		};

		var _scrollTop = function(callback){
			$("html, body").animate({ scrollTop: 0 }, 200,callback);
		};

		var _triggerLocation = function(url){
			$location.url(url);
			jumboBackgroundService.setHidden();
			_resetHeader();
		};

		var _navigateToIndex = function(idx){
			_scrollTop(_triggerLocation(_getRouteForIndex(idx)));
		}

		var _getIndexForRoute = function(route){
			return _indexMap[route] === undefined ? 0 : _indexMap[route];
		}

		var _resetHeader = function(){
			$(".oncase-header").removeClass("oncase-small-header")
		};

		return {
			getRouteForIndex : _getRouteForIndex,
			navigateToIndex : _navigateToIndex,
			getIndexForRoute : _getIndexForRoute
		};

	}]);


})();
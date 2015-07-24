(function(){

	angular.module('headerModule').
	factory('menuService',['$location','$window','$timeout','jumboBackgroundService',
		function($location,$window,$timeout,jumboBackgroundService){

		var _selectedIndex = 0;

		var _indexMap = {
			"/" : 						{index : 0, jumboSmall: false},
			"/about" : 					{index : 1, jumboSmall: true},
			"/services" : 				{index : 2, jumboSmall: true},
			"/products" : 				{index : 3, jumboSmall: true},
			"/clients-and-partners" : 	{index : 4, jumboSmall: true},
			"/contact" : 				{index : 5, jumboSmall: true},
		};

		var _getRouteForIndex = function(idx){
			return idx < Object.keys(_indexMap).length 
					? Object.keys(_indexMap)[idx]
					: Object.keys(_indexMap)[0] ;
		};

		var _getJumboSmallForUrl = function(url){
			return undefined != _indexMap[url] 
					? _indexMap[url].jumboSmall
					: true;
		};

		var _scrollTop = function(callback){
			$("html, body").animate({ scrollTop: 0 }, 800,callback);
		};

		var _triggerLocation = function(url){
			$location.url(url);
			jumboBackgroundService.setHidden();
			jumboBackgroundService.setSmall(_getJumboSmallForUrl(url));
		};

		var _navigateToIndex = function(idx){
			_scrollTop(_triggerLocation(_getRouteForIndex(idx)));
		}

		var _getIndexForRoute = function(route){
			return _indexMap[route] === undefined ? 0 : _indexMap[route].index;
		}

		return {
			getRouteForIndex : _getRouteForIndex,
			navigateToIndex : _navigateToIndex,
			getIndexForRoute : _getIndexForRoute,
			getJumboSmallForUrl : _getJumboSmallForUrl
		};

	}]);


})();
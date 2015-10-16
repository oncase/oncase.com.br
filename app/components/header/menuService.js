(function(){

	angular.module('headerModule').
	factory('menuService',['$location','$window','$timeout','jumboBackgroundService','$rootScope','$route','$translate',
		function($location,$window,$timeout,jumboBackgroundService, $rootScope, $route, $translate){

		var _selectedIndex = 0, 
		_indexMap = {},
		_currentLang = "__",
		__routeLangParamName = ":lang";

		_indexMap["__"] = {
				"/" : 						{index : 0, jumboSmall: false},
				"/about" : 					{index : 1, jumboSmall: true},
				"/services" : 				{index : 2, jumboSmall: true},
				"/products" : 				{index : 3, jumboSmall: true},
				"/clients-and-partners" : 	{index : 4, jumboSmall: true},
				"/contact" : 				{index : 5, jumboSmall: true},
		};
		_indexMap["en"] = {
				"/en" : 					{index : 0, jumboSmall: false},
				"/en/about" : 				{index : 1, jumboSmall: true},
				"/en/services" : 			{index : 2, jumboSmall: true},
				"/en/products" : 			{index : 3, jumboSmall: true},
				"/en/clients-and-partners" :{index : 4, jumboSmall: true},
				"/en/contact" : 			{index : 5, jumboSmall: true},
		};
		_indexMap["pt"] = {
				"/pt" : 					{index : 0, jumboSmall: false},
				"/pt/about" : 				{index : 1, jumboSmall: true},
				"/pt/services" : 			{index : 2, jumboSmall: true},
				"/pt/products" : 			{index : 3, jumboSmall: true},
				"/pt/clients-and-partners" :{index : 4, jumboSmall: true},
				"/pt/contact" : 			{index : 5, jumboSmall: true},
		};
		

		var _getCurrentLang = function(){
			return _currentLang;
		};

		var _setCurrentLang = function(lang){
			_currentLang = lang;
			$translate.use(lang);
			
			console.log("Language set to: "+_currentLang);
		};

		var _getRouteForIndex = function(idx){
			console.log("RETRIEVING ROUTE FOR INDEX: "+idx);
			console.log("CurrentLang: "+_getCurrentLang());
			var route = idx < Object.keys(_indexMap[_getCurrentLang()]).length 
					? Object.keys(_indexMap[_getCurrentLang()])[idx]
					: Object.keys(_indexMap[_getCurrentLang()])[0] ;

			console.log("Route: "+route);
			return route;
		};

		var _getJumboSmallForUrl = function(url){
			return undefined != _indexMap[_getCurrentLang()][url] 
					? _indexMap[_getCurrentLang()][url].jumboSmall
					: true;
		};

		var _scrollTop = function(callback){
			$("html, body").animate({ scrollTop: 0 }, 800,callback);
		};

		var _triggerLocation = function(url){
			$rootScope.metaPath = url;
			$location.url(url);
			jumboBackgroundService.setHidden();
			jumboBackgroundService.setSmall(_getJumboSmallForUrl(url));
		};

		var _navigateToIndex = function(idx){
			_scrollTop(_triggerLocation(_getRouteForIndex(idx)));
		}

		var _getIndexForRoute = function(route){
			return _indexMap[_getCurrentLang()][route] === undefined 
					? 0 
					: _indexMap[_getCurrentLang()][route].index;
		}

		var _getParsedRoutePath = function(route){
			return route.originalPath.replace(__routeLangParamName,route["pathParams"]["lang"]);
		}

		var _getCurrentRoutForLang = function(lang){
			var newRoute = $route.current.originalPath.replace(__routeLangParamName,lang);
			return newRoute;
		}

		return {
			getRouteForIndex : _getRouteForIndex,
			navigateToIndex : _navigateToIndex,
			getIndexForRoute : _getIndexForRoute,
			getJumboSmallForUrl : _getJumboSmallForUrl,
			getCurrentLang : _getCurrentLang,
			setCurrentLang : _setCurrentLang,
			getParsedRoutePath : _getParsedRoutePath,
			getCurrentRoutForLang : _getCurrentRoutForLang
		};

	}]);


})();
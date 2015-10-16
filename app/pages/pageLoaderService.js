(function(){

	var langs = ['pt', 'en'];

	angular.module('oncasePages').
	factory('pageLoaderService',['$timeout','$route','$location','$window','menuService',
		function($timeout, $route, $location, $window, menuService){
			var _timeout = $timeout;
				

			function _langResolve(){
				  	var _lang = $route.current.params.lang,
						_uLang = $window.navigator.userLanguage || $window.navigator.language;
						
					console.log("_lang: "+_lang);
					console.log("_uLang: "+_uLang);

					/*
						Browser language will be used when
						no/invalid language is passed. Default: 'pt'
					 */
					if(typeof _uLang === "undefined")
						_uLang = "pt";

					_uLang = _uLang.substring(0,2);
					_uLang = langs.indexOf(_uLang) < 0 ? "pt" : _uLang ;

					/*
						sends user to the right location
					 */
					if(langs.indexOf(_lang)<0){
						var url = typeof _lang === "undefined" ? "" : _lang;
						_lang = _uLang;
						url = "/"+_lang+"/"+url;

						console.log(url);
						menuService.setCurrentLang(_lang);
						$location.path( url );
					}

					menuService.setCurrentLang(_lang);
			}
			

			return {
				getContent : function(){
					console.log("estou em " + $location.path());
					_langResolve();
					return _timeout(function(){

						return true;
					},2000);
				}
			};

	}]);


})();
(function(){

  var app = angular.module(
  	'oncase',
  	[
  		'ngMaterial',
      'headerModule',
      'ngRoute',
      'ngAnimate',
      'oncasePages',
      'jumboBackgroundService','mouseOverClass'
  	]
  ).config(function($mdThemingProvider, $routeProvider, $locationProvider) {

      $mdThemingProvider

            .theme('default')
            .primaryPalette('blue-grey');

      $routeProvider

            .when('/', {
                templateUrl : 'app/pages/home/index.html',
                controller  : 'homeCtrl'
            })

            .when('/about', {
                templateUrl : 'app/pages/about/index.html',
                controller  : 'aboutCtrl'
            })

            .when('/services', {
                templateUrl : 'app/pages/services/index.html',
                controller  : 'servicesCtrl'
            })

            .when('/products', {
                templateUrl : 'app/pages/products/index.html',
                controller  : 'productsCtrl'
            })

            .when('/clients-and-partners', {
                templateUrl : 'app/pages/clipar/index.html',
                controller  : 'cliParCtrl'
            })

            .when('/contact', {
                templateUrl : 'app/pages/contact/index.html',
                controller  : 'contactCtrl'
            })

            .otherwise({
              redirectTo: '/'
            });

      $locationProvider.hashPrefix('!');
      $locationProvider.html5Mode(true);

  })

})();

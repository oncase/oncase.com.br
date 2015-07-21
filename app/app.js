(function () {

  var app = angular.module(
      'oncase', [
        'ngMaterial',
        'headerModule',
        'footerModule',
        'ngRoute',
        'ngAnimate',
        'oncasePages',
        'jumboBackgroundService', 'mouseOverClass'
      ]
    )
    .config(function ($mdThemingProvider, $routeProvider, $locationProvider) {

      $mdThemingProvider.definePalette('oncasePalette', {
        '50': 'e5e9ef',
        '100': 'bfc8d8',
        '200': '95a4bf',
        '300': '6f84a8',
        '400': '4e6693',
        '500': '2b4a7f',
        '600': '284576',
        '700': '203c6c',
        '800': '1b3462',
        '900': '0e2854',
        'A100': '82a5ea',
        'A200': '3a7bff',
        'A400': '1f68ff',
        'A700': '135ffe',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100']
      });

      $mdThemingProvider

        .theme('default')
        .primaryPalette('oncasePalette');

      $routeProvider

        .when('/', {
        templateUrl: 'app/pages/home/index.html',
        controller: 'homeCtrl'
      })

      .when('/about', {
        templateUrl: 'app/pages/about/index.html',
        controller: 'aboutCtrl'
      })

      .when('/services', {
        templateUrl: 'app/pages/services/index.html',
        controller: 'servicesCtrl'
      })

      .when('/products', {
        templateUrl: 'app/pages/products/index.html',
        controller: 'productsCtrl'
      })

      .when('/clients-and-partners', {
        templateUrl: 'app/pages/clipar/index.html',
        controller: 'cliParCtrl'
      })

      .when('/contact', {
        templateUrl: 'app/pages/contact/index.html',
        controller: 'contactCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.hashPrefix('!');
      $locationProvider.html5Mode(true);

    })

})();

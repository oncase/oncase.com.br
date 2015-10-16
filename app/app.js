(function () {

  var pageContentResolve = function(pageLoaderService){
    return pageLoaderService.getContent();
  };

  var app = angular.module(
      'oncase', [
        'ngMaterial',
        'headerModule',
        'footerModule',
        'ngRoute',
        'ngAnimate',
        'oncasePages',
        'jumboBackgroundService', 
        'mouseOverClass',
        'pageTransitionDirective',
        'pascalprecht.translate'
      ]
    )
    .config(function ($mdThemingProvider, $routeProvider, $locationProvider, $translateProvider) {


      $translateProvider.translations('en', msgs.en);
      $translateProvider.translations('pt', msgs.pt);
      $translateProvider.preferredLanguage('en');

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
        .primaryPalette('oncasePalette')
        .accentPalette('deep-orange');

      $routeProvider

      .when('/:lang/about', {
            templateUrl: 'app/pages/about/index.html',
            controller: 'aboutCtrl',
            controllerAs: 'aboutCtrl',
            resolve: {
              content:pageContentResolve
            }
      })

      .when('/:lang/services', {
            templateUrl: 'app/pages/services/index.html',
            controller: 'servicesCtrl',
            controllerAs: 'servicesCtrl',
            resolve: {
              content:pageContentResolve
            }
      })

      .when('/:lang/products', {
            templateUrl: 'app/pages/products/index.html',
            controller: 'productsCtrl',
            controllerAs: 'productsCtrl',
            resolve: {
              content:pageContentResolve
            }
      })

      .when('/:lang/clients-and-partners', {
            templateUrl: 'app/pages/clipar/index.html',
            controller: 'cliParCtrl',
            controllerAs: 'cliParCtrl',
            resolve: {
              content:pageContentResolve
            }
      })

      .when('/:lang/contact', {
            templateUrl: 'app/pages/contact/index.html',
            controller: 'ContactCtrl',
            controllerAs: 'ContactCtrl',
            resolve: {
              content:pageContentResolve
            }
      })


      .when('/:lang', {
            templateUrl: 'app/pages/home/index.html',
            controller: 'homeCtrl',
            controllerAs: 'homeCtrl',
            resolve: {
              content:pageContentResolve
            }
      })


      .when('/', {
            templateUrl: 'app/pages/home/index.html',
            controller: 'homeCtrl',
            controllerAs: 'homeCtrl',
            resolve: {
              content:pageContentResolve
            }
      })

      .otherwise({
            redirectTo: '/'
      });

      $locationProvider.hashPrefix('!');
      $locationProvider.html5Mode(true);

    })

})();

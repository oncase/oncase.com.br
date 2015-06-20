(function(){

  var app = angular.module(
  	'oncase',
  	[
  		'ngMaterial',
      'waypoint-config-directive'
  	]
  ).config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey');
      })

})();
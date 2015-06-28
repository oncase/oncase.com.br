(function(){

  angular.module('homeModule',['ui.bootstrap']).

  controller('homeCtrl',function($scope){

  	$scope.myInterval = 5000;

  	$scope.slides = [
      {
        smallText : "Nosso neg\u00F3cio \u00E9", 
        bigText : "Intelig\u00EAncia",
        icon : "equalizer"
      },
      {
        smallText : "Somos especialistas", 
        bigText : "em Cloud",
        icon : "cloud"
      },
      {
        smallText : "Premium Partner", 
        bigText : "Pentaho",
        icon : "new_releases"
      }
  	];
    
  });

})();
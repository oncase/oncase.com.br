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
        smallText : "Você está pronto para", 
        bigText : "a Nuvem?",
        icon : "cloud"
      },
      {
        smallText : "Somos o único Pentaho Premium Partner", 
        bigText : "do Brasil",
        icon : "new_releases"
      }
  	];
    
  });

})();
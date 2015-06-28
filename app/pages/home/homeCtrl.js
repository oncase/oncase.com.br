(function(){

  angular.module('homeModule',['ui.bootstrap']).

  controller('homeCtrl',function($scope){

  	$scope.myInterval = 5000;

  	$scope.slides = [
      {
        smallText : "Somos orgulhosos", 
        bigText : "Premium Partner",
        imgPath:'assets/img/pentaho-premium-partner.svg',
        isSvg : true
      },
      {
        smallText : "Nosso neg\u00F3cio \u00E9", 
        bigText : "Intelig\u00EAncia",
        icon : "equalizer",
        isIcon : true,
        iconColor : "orange"
      },
      {
        smallText : "Somos especialistas", 
        bigText : "em Cloud",
        icon : "cloud",
        isIcon : true,
        iconColor : "orange"
      }
  	];
    
  });

})();
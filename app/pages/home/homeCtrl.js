(function(){

  angular.module('homeModule',['ui.bootstrap','jumboBackgroundService']).

  controller('homeCtrl',['$scope','jumboBackgroundService',function($scope,jumboBackgroundService){

    jumboBackgroundService.setVisible();

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


      $scope.test = function(){
        console.log(1);
      };
    
  }]);

})();
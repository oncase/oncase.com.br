(function(){

  angular.module('homeModule',['ui.bootstrap']).

  controller('homeCtrl',function($scope){

  	$scope.myInterval = 5000;

  	$scope.slides = [
  		{
  			smallText : "Our Business is",
  			bigText : "Intelligence"
  		},
  		{
  			smallText : "Nosso neg\u00F3cio \u00E9", 
  			bigText : "Intelig\u00EAncia"
  		}
  	];
    
  });

})();
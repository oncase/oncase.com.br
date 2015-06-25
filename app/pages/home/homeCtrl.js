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
  			smallText : "Nosso negócio é", 
  			bigText : "Inteligência"
  		}
  	];
    
  });

})();
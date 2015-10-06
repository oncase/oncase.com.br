(function(){

  angular.module('servicesModule',[]).

  controller('servicesCtrl',['jumboBackgroundService','content','$scope','$rootScope','$window',
  	function(jumboBackgroundService,content,$scope, $rootScope,$window){


      /* Meta tags per page
       */
      $rootScope.metaTitleSuffix = " - Serviços";
      $rootScope.metaDescription = "Conheça todos os nossos serviços. Somos experts em Business Analytics, BigData and Data Visualization e orgulhosos Pentaho Premium Partners.";

      

	  	jumboBackgroundService.setSmall(true);
	    jumboBackgroundService.setVisible();

	    this.goTo = function(idx){
	    	$scope.$parent.selectedIndex = idx;
	    	return $scope.$parent.selectedIndex;
	    };

	    $window.prerenderReady = true;

  }]);



})();
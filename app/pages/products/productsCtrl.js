(function(){

  angular.module('productsModule',[]).

  controller('productsCtrl',['jumboBackgroundService','content','$scope','$rootScope','$window',
  	function(jumboBackgroundService,content,$scope, $rootScope,$window){

      /* Meta tags per page
       */
      $rootScope.metaTitleSuffix = " - Produtos";
      $rootScope.metaDescription = "Veja os produtos que oferecemos. Somos experts em Business Analytics, BigData and Data Visualization e orgulhosos Pentaho Premium Partners.";

      

  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();

	    this.goTo = function(idx){
	    	$scope.$parent.selectedIndex = idx;
	    	return $scope.$parent.selectedIndex;
	    };

	    $window.prerenderReady = true;

  }]);

})();
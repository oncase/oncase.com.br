(function(){

  angular.module('productsModule',[]).

  controller('productsCtrl',['jumboBackgroundService','content','$scope',function(jumboBackgroundService,content,$scope){
  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();

	    this.goTo = function(idx){
	    	$scope.$parent.selectedIndex = idx;
	    	return $scope.$parent.selectedIndex;
	    };

  }]);

})();
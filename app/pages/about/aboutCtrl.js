(function(){

  angular.module('aboutModule',[]).

  controller('aboutCtrl',['$scope','jumboBackgroundService','content','$rootScope',
    function($scope,jumboBackgroundService,content, $rootScope){

      /* Meta tags per page
       */
      $rootScope.metaTitleSuffix = " - Quem Somos";
      $rootScope.metaDescription = "Conheça um pouco mais sobre nós. Somos experts em Business Analytics, BigData and Data Visualization e orgulhosos Pentaho Premium Partners.";

      

  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();
    $scope.showAwardsSeeMoreButton = false;
    $scope.showServicesFlowMoreButton = false;

    this.goTo = function(idx){
    	$scope.$parent.selectedIndex = idx;
    	return $scope.$parent.selectedIndex;
    };

  }]);

})();
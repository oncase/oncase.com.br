(function(){

  angular.module('aboutModule',[]).

  controller('aboutCtrl',['$scope','jumboBackgroundService','content','$rootScope','$window','menuService',
    function($scope,jumboBackgroundService,content, $rootScope,$window, menuService){

      /* Meta tags per page
       */
      $rootScope.metaTitleSuffix = " - "+msgs[menuService.getCurrentLang()].header.MENU_ABOUT;
      $rootScope.metaDescription = msgs[menuService.getCurrentLang()].header.META_ABOUT;

      

  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();
    $scope.showAwardsSeeMoreButton = false;
    $scope.showServicesFlowMoreButton = false;

    this.goTo = function(idx){
    	$scope.$parent.selectedIndex = idx;
    	return $scope.$parent.selectedIndex;
    };
    $window.prerenderReady = true;

  }]);

})();
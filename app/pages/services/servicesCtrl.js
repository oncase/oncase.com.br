(function(){

  angular.module('servicesModule',[]).

  controller('servicesCtrl',['jumboBackgroundService','content','$scope','$rootScope','$window','menuService',
  	function(jumboBackgroundService,content,$scope, $rootScope,$window, menuService){


      /* Meta tags per page
       */
      $rootScope.metaTitleSuffix = " - "+msgs[menuService.getCurrentLang()].header.MENU_SERVICES;
      $rootScope.metaDescription = msgs[menuService.getCurrentLang()].header.META_SERVICES;

      

	  	jumboBackgroundService.setSmall(true);
	    jumboBackgroundService.setVisible();

	    this.goTo = function(idx){
	    	$scope.$parent.selectedIndex = idx;
	    	return $scope.$parent.selectedIndex;
	    };

	    $window.prerenderReady = true;

  }]);



})();
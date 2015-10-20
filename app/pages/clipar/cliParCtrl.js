(function(){

  angular.module('cliParModule',[]).

  controller('cliParCtrl',['jumboBackgroundService','content','$scope','$mdBottomSheet','$rootScope','$window','menuService',
  	function(jumboBackgroundService,content,$scope,$mdBottomSheet, $rootScope,$window, menuService){



		/* Meta tags per page
		*/
      $rootScope.metaTitleSuffix = " - "+msgs[menuService.getCurrentLang()].header.MENU_CLIPAR;
      $rootScope.metaDescription = msgs[menuService.getCurrentLang()].header.META_CLIPAR;

      

	  	jumboBackgroundService.setSmall(true);
	    jumboBackgroundService.setVisible();

	    this.goTo = function(idx){
	    	$scope.$parent.selectedIndex = idx;
	    	return $scope.$parent.selectedIndex;
	    };

		$scope.openBottomSheet = function($event, client) {
			var element = $event.target.parentElement.parentElement;
			$mdBottomSheet.show({
			  template: '<md-bottom-sheet><h1>'+client.name+'</h1><p>'+client.areas+'</p><p><a target="_blank" class="no-outline" href="'+client.site+'">'+client.site+'</a></p></md-bottom-sheet>',
			  targetEvent: $event,
			  parent:angular.element(element)
			});
		};

		this.clients = msgs[ menuService.getCurrentLang() ].clientsDataSet;

		$window.prerenderReady = true;

  }]);

})();
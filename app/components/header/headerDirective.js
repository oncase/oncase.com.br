(function(){

  angular.module('headerModule', ['ripple',
      'sideMenu'] )
  
  .directive('oncaseHeader',function(){
  	return {
  		restrict : 'E',
      templateUrl : 'app/components/header/oncase-header.html',
      controller : 'HeaderCtrl',
      controllerAs : 'HeaderCtrl'
  	};
  })

  .controller('HeaderCtrl',['$scope','menuService','$location','jumboBackgroundService',
    function($scope,menuService,$location,jumboBackgroundService){

    $scope.selectedIndex = menuService.getIndexForRoute($location.url());

    this.tabClicked = function(idx){
      menuService.navigateToIndex(idx);
    };

    this.jumboBackgroundVisible = jumboBackgroundService.getVisibility;
    
  }]);

})();
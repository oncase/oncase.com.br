(function(){

  angular.module('headerModule', ['ripple'] )
  
  .directive('oncaseHeader',function(){
  	return {
  		restrict : 'E',
      templateUrl : 'app/components/header/oncase-header.html',
      controller : 'HeaderCtrl',
      controllerAs : 'HeaderCtrl'
  	};
  })

  .controller('HeaderCtrl',['$scope','menuService','$location',
    function($scope,menuService,$location){

    $scope.selectedIndex = menuService.getIndexForRoute($location.url());

    console.log();
    this.tabClicked = function(idx){
      menuService.navigateToIndex(idx);
    }

  }]);

})();
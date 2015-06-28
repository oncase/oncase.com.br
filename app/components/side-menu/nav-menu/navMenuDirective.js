(function(){

  var app = angular.module('sideMenu');

  app.directive('navMenu',['menuService',function(menuService){
    return {
      restrict : 'E',
      templateUrl : 'app/components/side-menu/nav-menu/nav-menu.html',
      controllerAs : 'navCtrl',

      controller : function($scope){
        
        this.menuClicked = function(idx){
          $scope.selectedIndex = idx;
          menuService.navigateToIndex(idx);
          $scope.disposeMenu();
        };

      }

    };
  }]);

})();
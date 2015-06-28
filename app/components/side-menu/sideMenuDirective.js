(function(){

  var app = angular.module(
    'sideMenu',
    ['overlayService']);

  app.directive('sideMenu',['overlayService',function(overlayService){
    return {
      restrict : 'E',
      templateUrl : 'app/components/side-menu/side-menu.html',
      controllerAs : 'sideMenuCtrl',

      controller : function($scope){

        var sideMenu = this;

        var menuSide = null;

        this.rightMenuHidden = true;
        this.leftMenuHidden = true;

        $scope.showMenu = function(side){

          overlayService.showOverlay($scope.disposeMenu);

          if( side=="right" ){
            sideMenu.rightMenuHidden = false;
          }else if(side == "left"){
            sideMenu.rightMenuHidden = false;
          }

        };

        $scope.disposeMenu = function(){

          sideMenu.rightMenuHidden = true;
          sideMenu.rightMenuHidden = true;
          overlayService.hideOverlay();

        };

      }

    };
  }]);

})();
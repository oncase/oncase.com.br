(function(){

  angular.module('headerModule', ['ripple',
      'sideMenu', 'scrollModule'] )
  
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

    this.getCurrentRoutForLang = function(lang){
      return menuService.getCurrentRoutForLang(lang);
    };

    this.getCurrentLang = function(){
      return menuService.getCurrentLang();
    };

    this.jumboBackgroundVisible = jumboBackgroundService.getVisibility;
    this.isJumboSmall = function(){return jumboBackgroundService.getSmall()};

    $scope.$on( "$routeChangeStart", function(event, next, current) {

      var nextRoute = menuService.getParsedRoutePath(next),
          sysLang = menuService.getCurrentLang(),
          routeLang = next["pathParams"]["lang"];

      if(sysLang !== routeLang && typeof routeLang !== "undefined")
        menuService.setCurrentLang(routeLang);

      console.log(nextRoute);
      $scope.selectedIndex = menuService.getIndexForRoute(nextRoute);
      console.log($scope.selectedIndex);

    });
    
  }]);

})();
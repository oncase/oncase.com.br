(function(){

  angular.module('homeModule',['ui.bootstrap' ]).

  controller('homeCtrl',['$scope','jumboBackgroundService','content','$window','$rootScope','menuService',
    function($scope,jumboBackgroundService,content, $window, $rootScope, menuService){

      /* Meta tags per page
       */
      $rootScope.metaTitleSuffix = "";
      $rootScope.metaDescription = msgs[menuService.getCurrentLang()].header.META_HOME;



      var videosPaneExpanded = false;

    jumboBackgroundService.setSmall(false);
    jumboBackgroundService.setVisible();

  	$scope.myInterval = 5000;
    $scope.showAwardsSeeMoreButton = true;
    $scope.showServicesFlowMoreButton = true;

    function getMsgs(){
      return msgs[menuService.getCurrentLang()];
    }

  	$scope.slides = [
      {
        smallText : getMsgs().home.CAROUSEL_WEARE_PROUD, 
        bigText : getMsgs().home.CAROUSEL_PREMIUM_PARTNERS,
        imgPath:'assets/img/pentaho-premium-partner.svg',
        isSvg : true
      },
      {
        smallText : getMsgs().home.CAROUSEL_OUR_BUSINESS_IS, 
        bigText : getMsgs().home.CAROUSEL_INTELLIGENCE,
        icon : "equalizer",
        isIcon : true,
        iconColor : "orange"
      },
      {
        smallText : getMsgs().home.CAROUSEL_WEARE, 
        bigText : getMsgs().home.CAROUSEL_CLOUD_SPECIALISTS,
        icon : "cloud",
        isIcon : true,
        iconColor : "orange"
      }

  	];

      this.goTo = function(idx){
        $scope.$parent.selectedIndex = idx;
        return $scope.$parent.selectedIndex;
      };

      $scope.test = function(){
        console.log(1);
      };

      this.openYoutubeChannel = function(){
        window.open("https://youtube.com/oncasebr?sub_confirmation=1");
      }

      this.isVideosPaneExpanded = function(){
        return videosPaneExpanded;
      };

      this.showVideosPane = function(){
        videosPaneExpanded = !videosPaneExpanded;
      };

      $window.prerenderReady = true;

    
  }]);

})();
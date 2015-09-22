(function(){

  angular.module('homeModule',['ui.bootstrap' ]).

  controller('homeCtrl',['$scope','jumboBackgroundService','content','$window','$rootScope',
    function($scope,jumboBackgroundService,content, $window, $rootScope){

      /* Meta tags per page
       */
      $rootScope.metaTitleSuffix = "";
      $rootScope.metaDescription = "Somos experts em Business Analytics, BigData and Data Visualization e orgulhosos Pentaho Premium Partners.";



      var videosPaneExpanded = false;

    jumboBackgroundService.setSmall(false);
    jumboBackgroundService.setVisible();

  	$scope.myInterval = 5000;
    $scope.showAwardsSeeMoreButton = true;
    $scope.showServicesFlowMoreButton = true;

  	$scope.slides = [
      {
        smallText : "Somos orgulhosos", 
        bigText : "Premium Partner",
        imgPath:'assets/img/pentaho-premium-partner.svg',
        isSvg : true
      },
      {
        smallText : "Nosso neg\u00F3cio \u00E9", 
        bigText : "Intelig\u00EAncia",
        icon : "equalizer",
        isIcon : true,
        iconColor : "orange"
      },
      {
        smallText : "Somos especialistas", 
        bigText : "em Cloud",
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
    
  }]);

})();
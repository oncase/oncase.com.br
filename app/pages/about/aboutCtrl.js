(function(){

  angular.module('aboutModule',[]).

  controller('aboutCtrl',['$scope','jumboBackgroundService','content',function($scope,jumboBackgroundService,content){
  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();
    $scope.showAwardsSeeMoreButton = false;
    $scope.showServicesFlowMoreButton = false;
  }]);

})();
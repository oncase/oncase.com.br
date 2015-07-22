(function(){

  angular.module('aboutModule',[]).

  controller('aboutCtrl',['jumboBackgroundService',function(jumboBackgroundService){
  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();
  }]);

})();
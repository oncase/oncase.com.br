(function(){

  angular.module('servicesModule',[]).

  controller('servicesCtrl',["jumboBackgroundService",function(jumboBackgroundService){
  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();
  }]);

})();
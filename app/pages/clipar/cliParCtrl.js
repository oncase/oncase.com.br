(function(){

  angular.module('cliParModule',[]).

  controller('cliParCtrl',["jumboBackgroundService",function(jumboBackgroundService){
  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();
  }]);

})();
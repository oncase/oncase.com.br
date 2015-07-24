(function(){

  angular.module('cliParModule',[]).

  controller('cliParCtrl',['jumboBackgroundService','content',function(jumboBackgroundService,content){
  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();
  }]);

})();
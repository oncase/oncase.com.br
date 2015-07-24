(function(){

  angular.module('servicesModule',[]).

  controller('servicesCtrl',['jumboBackgroundService','content',function(jumboBackgroundService,content){
  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();
  }]);

})();
(function(){

  angular.module('contactModule',[]).

  controller('contactCtrl',["jumboBackgroundService",function(jumboBackgroundService){
  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();
  }]);

})();
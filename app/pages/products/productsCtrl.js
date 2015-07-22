(function(){

  angular.module('productsModule',[]).

  controller('productsCtrl',["jumboBackgroundService",function(jumboBackgroundService){
  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();
  }]);

})();
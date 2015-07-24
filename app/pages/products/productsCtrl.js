(function(){

  angular.module('productsModule',[]).

  controller('productsCtrl',['jumboBackgroundService','content',function(jumboBackgroundService,content){
  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();
  }]);

})();
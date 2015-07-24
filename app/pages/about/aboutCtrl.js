(function(){

  angular.module('aboutModule',[]).

  controller('aboutCtrl',['jumboBackgroundService','content',function(jumboBackgroundService,content){
  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();
  }]);

})();
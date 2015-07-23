(function(){

  angular.module('contactModule',['ngMap']).

  controller('ContactCtrl',['jumboBackgroundService','$scope','$window','$document',
  	function(jumboBackgroundService,$scope,$window,$document){

  	var ContactCtrl = this;
  	var google = $window.google;

    this.user = {
    	name:"",
    	email: "",
    	tel:"",
    	msg : ""
	};

  	jumboBackgroundService.setSmall(true);
    jumboBackgroundService.setVisible();

    this.animateSending = function(){

    	/* TODO: This should be translated to Angular
		 */
    	$('.send-plane').addClass('send-active');

    };

    this.animateSentOK = function(){

		setTimeout(function(){
			$('.send-check').fadeIn();
		},500);

		setTimeout(function(){
			$('.send-check').addClass('send-active');
		},1000);

    };

    this.animateAirplaneBack = function(){

		/* TODO: This should be translated to Angular
		 */
		setTimeout(function(){
			$('.send-check').fadeOut().removeClass('send-active');
			$('.send-plane').removeClass('send-active');
		},4000);
    };

    this.send =  function(){
    	ContactCtrl.animateSending();
    	ContactCtrl.animateSentOK();
    	ContactCtrl.animateAirplaneBack();
    };





  }]);

})();
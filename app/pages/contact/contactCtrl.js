(function(){

  angular.module('contactModule',['ngMap']).

  controller('ContactCtrl',['jumboBackgroundService','$scope','$window','$document','content','sendMailService','$mdToast','$rootScope','menuService',
  	function(jumboBackgroundService,$scope,$window,$document,content,sendMailService,$mdToast, $rootScope, menuService){


      /* Meta tags per page
       */
      $rootScope.metaTitleSuffix = " - "+msgs[menuService.getCurrentLang()].header.MENU_CONTACT;
      $rootScope.metaDescription = msgs[menuService.getCurrentLang()].header.META_CONTACT;

      


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

    this.resetContactForm = function(){
        for(key in ContactCtrl.user){
          ContactCtrl.user[key] = "";
        }

      $scope.contactForm.$setUntouched();
    };

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

    this.animateSentError = function(){
      setTimeout(function(){
        $('.send-check').fadeIn();
      },500);

      setTimeout(function(){
        $('.send-check').addClass('send-error');
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

    this.showToast = function(msg){
      $mdToast.show($mdToast.simple().content(msg));
    };

    this.errorSending = function(){
      ContactCtrl.showToast("Erro ao enviar");
      ContactCtrl.animateSentError();
      ContactCtrl.animateAirplaneBack();
    };

    this.sendSuccess = function(){
      ContactCtrl.showToast("Mensagem enviada com sucesso. Obrigado!");
      ContactCtrl.animateSentOK();
      ContactCtrl.animateAirplaneBack();
      ContactCtrl.resetContactForm();
    }

    this.send = function(){
      
      if(!$scope.contactForm.$valid){
        ContactCtrl.showToast("Por favor, corrija o formulário!");
        return;
      }

      ContactCtrl.animateSending();

      sendMailService.sendContactPost(ContactCtrl.user)
      .success(function(data, status, headers, config){

        if ( "1" == data ){
          ContactCtrl.sendSuccess();
        }else{
          ContactCtrl.errorSending();
        }

      })
      .error(function(data, status, headers, config) {
          ContactCtrl.errorSending();
      });
  
    	
    };

    $window.prerenderReady = true;





  }]);

})();
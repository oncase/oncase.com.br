(function(){

	angular.module('contactModule').
	factory('sendMailService',['$http',
		function($http){

			var _sendMailUrl = '/app/server/sendmail.php'

			var _sendContactPost = function(formData){
				return $http({
			      method: "post",
			      url: _sendMailUrl,
			      data: formData,
			      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			    });
			};

			return {
				sendContactPost : _sendContactPost
			};

	}]);


})();
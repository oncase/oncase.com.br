(function(){

	angular.module('contactModule').
	factory('sendMailService',['$http',
		function($http){

			var _sendMailUrl = '/app/server/sendmail.php'

			var _sendContactPost = function(formData){
				return $http.post(
						_sendMailUrl,
						formData
					);
			};

			return {
				sendContactPost : _sendContactPost
			};

	}]);


})();

(function(){

  angular.module('jumboBackgroundService', [] ).

  factory('jumboBackgroundService',function(){

    var _jumboBackgroundVisible = false;

    var _setVisible = function(){
      _jumboBackgroundVisible = true;
    };

    var _setHidden = function(){
      _jumboBackgroundVisible = false;
    };

    var _getVisibility = function(){
      return _jumboBackgroundVisible;
    };
    


  	return {
      setVisible : _setVisible,
      getVisibility : _getVisibility,
      setHidden : _setHidden
  	};

  });

})();
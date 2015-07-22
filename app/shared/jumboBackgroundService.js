
(function(){

  angular.module('jumboBackgroundService', [] ).

  factory('jumboBackgroundService',function(){

    var _jumboBackgroundVisible = false;
    var _smallJumbo = false;

    var _setVisible = function(){
      _jumboBackgroundVisible = true;
    };

    var _setHidden = function(){
      _jumboBackgroundVisible = false;
    };

    var _getVisibility = function(){
      return _jumboBackgroundVisible;
    };
    
    var _setSmall = function(small){
      _smallJumbo = small;
    };
    
    var _getSmall = function(small){
      return _smallJumbo;
    };


  	return {
      setVisible : _setVisible,
      getVisibility : _getVisibility,
      setHidden : _setHidden,
      setSmall : _setSmall,
      getSmall : _getSmall
  	};

  });

})();
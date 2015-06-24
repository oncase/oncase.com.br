(function () {

  angular.module('ripple').

  factory('rippleService', function () {

    var _willTrigger = function (evt, conf) {

    	var check=!$(evt.target).is(conf.doNotTriggerSelector)
    	&& $(evt.target).is(conf.triggerSelector);

    	return check;
	}

    var _clicked = function (evt, conf, wrapper) {

      if (!_willTrigger(evt, conf))
        return;

      var ripDiv = $('<svg style="margin-left:-50px;margin-top:-50px;"'+
      	' class="ripple-effect" height="100" width="100"> <circle cx="50"'+
      	' cy="50" r="40" fill="white" /></svg>'),
        effectBoundElm = $(wrapper),
        btnOffset = effectBoundElm.offset(),
        xPos = evt.pageX - btnOffset.left,
        yPos = evt.pageY - btnOffset.top;

      ripDiv.
      css({
          top: yPos,
          left: xPos 
      }).
      appendTo(effectBoundElm);

      window.setTimeout(function () {
        ripDiv.remove();
      }, 590);

    };

    return {
      clicked: _clicked
    };

  });

})();
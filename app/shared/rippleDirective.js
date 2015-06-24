(function () {

  angular.module('ripple', [])

  .directive('rippleConfig', ['rippleService',function (rippleService) {
    return {
      restrict: 'A',
      link: function (scope, elm, attrs) {

        var conf = scope.$eval(attrs.rippleConfig);
        
        elm.on('click', function (evt) {
          rippleService.clicked(evt, conf, elm);
        });

      }
    };
  }])

})();

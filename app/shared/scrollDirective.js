(function(){
    angular.module('scrollModule', []).
    directive("scroll", function ($window) {
        return function(scope, element, attrs) {
            var offset = parseInt(element.attr("scroll"),10);
            if (!isFinite(offset))
                return;

            angular.element($window).bind("scroll", function() {

                 if (this.pageYOffset > offset) {
                     scope.boolChangeClass = true;
                 } else {
                     scope.boolChangeClass = false;
                 }
                scope.$apply();
            });
        };
    });
})();


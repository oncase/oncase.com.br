
(function(){

  angular.module('waypointConfigDirective', [] )
  
  /* This hooks the waypoint JQuery plugin to 
  	 the attribute waypoint-config attribute
  	 of an element.
   */
  .directive('waypointConfig',['$window',function($window){
  	return {
  		restrict : 'A',
  		link : function(scope, elm, attrs){

  			var conf = scope.$eval(attrs.waypointConfig);

			var waypointScroll = new Waypoint({
			  element: $(elm),
			  handler: function(direction) {
			  	if($window.scrollY==0){
					if(conf.addUp)
			      		$(conf.target).addClass(conf.addUp);
			      	if(conf.remUp)
			      		$(conf.target).removeClass(conf.remUp);
			  		return;
			  	}
			  		
			    if(direction==="down"){
			    	if(conf.addDown)
			      		$(conf.target).addClass(conf.addDown);
			      	if(conf.remDown)
			      		$(conf.target).removeClass(conf.remDown);
			    }else{
			    	if(conf.addUp)
			      		$(conf.target).addClass(conf.addUp);
			      	if(conf.remUp)
			      		$(conf.target).removeClass(conf.remUp);
			    }
			  }
			});

  		}
  	};
  }]);

})();
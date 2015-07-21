(function(){

  angular.module('footerModule', [ ] )
  
  .directive('oncaseFooter',['$window','$document',function($window,$document){
  	return {
  		restrict : 'E',
      templateUrl : 'app/components/footer/oncase-footer.html',
      controller : 'FooterCtrl',
      controllerAs : 'FooterCtrl',
      link : function(){

              var d3 = $window.d3;

                /*
                Area chart with points
                */
                var seed = 5; // minimum size of the point

                var data = [
                  { x: 0, y: 0 },
                  { x: 1, y: 8 },
                  { x: 2, y: 0 },
                  { x: 3, y: 35 },
                  { x: 4, y: 5 },
                  { x: 5, y: 5 },
                  { x: 6, y: 5 },
                  { x: 7, y: 5 },
                  { x: 8, y: 5 },
                  { x: 9, y: 5 },
                  { x: 10, y: 5 }
                ];

                var width = $document[0].documentElement.clientWidth,
                    height = 160;

                var x     = d3.scale.linear()
                              .domain([0, d3.max(data, function(d) { return d.x; })])
                              .range([0, width]);

                var y     = d3.scale.linear()
                              .domain([-20, d3.max(data, function(d) { return d.y; })])
                              .range([height, 20]);

                var area  = d3.svg.area()
                              .x(function(d) { return x(d.x); })
                              .y0(height)
                              .y1(function(d) { return y(d.y); })
                              .interpolate("linearf");

                var svg   = d3.select("svg#area")
                              .attr("width", "100%" )
                              .attr("height", height )

                lines     = svg.append("g")
                              .attr("class", "horizontal-grid");

                lines.selectAll("line.horizontalGrid")
                              .data(y.ticks(9))
                              .enter()
                              .append("line")
                              .attr(
                                {
                                  "class":"horizontalGrid",
                                  "x1" : 0,
                                  "x2" : width,
                                  "y1" : function(d){ return y(d)-20;},
                                  "y2" : function(d){ return y(d)-20;},
                                  "fill" : "none",
                                  "shape-rendering" : "crispEdges",
                                  "stroke" : "#dfdfdf",
                                  "stroke-width" : "1px"
                                }
                              );

                /*
                    Bar chart subsection
                */

                var dataBar = [
                  {category:'01', value:30, color:"#416db7"},
                  {category:'02', value:25, color:"#be4d4b"},
                  {category:'03', value:35, color:"#f59632"},
                  {category:'04', value:27, color:"#5f467e"},
                  {category:'05', value:15, color:"#507ec1"},
                  {category:'06', value:35, color:"#4eacc8"},
                  {category:'07', value:24, color:"#9dbe45"}
                ];

                var widthBar = 250,
                    heightBar = 140;

                var xB    = d3.scale.ordinal()
                              .rangeRoundBands([0, widthBar], .05);

                var yB    = d3.scale.linear()
                              .range([heightBar, 0]);

                var svgBar = d3.select("svg#area")
                              .append("g")
                              .attr("class","barChart");
                
                xB.domain(dataBar.map(function(d) { return d.category; }));
                yB.domain([0, d3.max(dataBar, function(d) { return d.value; })]);

                var imgs = svg.selectAll("img").data(dataBar);

                // Bars Shadows
                imgs.enter()
                              .insert("svg:image",":first-child")
                              .attr("xlink:href", "../../../assets/img/bar-shadow.png")
                              .attr("x", function(d) { return xB(d.category); })
                              .attr("y", function(d) { return yB(d.value); })
                              .attr("width", "72")
                              .attr("height", "112");

                // bars
                svgBar.selectAll("bar")
                              .data(dataBar)
                              .enter().append("rect").attr("class","oncase-bar")
                              .style("fill", function(d){ return d.color; })
                              .attr("x", function(d) { return xB(d.category); })
                              .attr("width", xB.rangeBand()-10)
                              .attr("y", function(d) { return yB(d.value); })
                              .attr("height", function(d) { return heightBar - yB(d.value); });


                /*
                    END Bar chart subsection
                */

                svg.append("path")
                              .datum(data)
                              .attr("class", "oncase-area-chart")
                              .attr("d", area).append("g");


                var circlesContainer = svg.append("g")
                              .attr("class", "circles-container");

                var circles = circlesContainer.selectAll("g.dots")
                              .data(data.slice(0,5))
                              .enter()
                              .append("g")
                              .attr("class", "oncase-dots");

                circles.append("circle")
                              .attr("class", "oncase-area-point-blue")
                              .attr("r", seed+6)
                              .attr("cx", function(d,i) {  return x(d.x); })
                              .attr("cy", function(d,i) { return y(d.y); });

                circles.append("circle")
                              .attr("class", "oncase-area-point-light")
                              .attr("r", seed+4)
                              .attr("cx", function(d,i) {  return x(d.x); })
                              .attr("cy", function(d,i) { return y(d.y); })

                circles.append("circle")
                              .attr("class", "oncase-area-point-blue-small")
                              .attr("r", seed)
                              .attr("cx", function(d,i) {  return x(d.x); })
                              .attr("cy", function(d,i) { return y(d.y); })


              }
            };
          }])

.controller('FooterCtrl',[ function(){

}]);

})();
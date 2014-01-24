var app = angular.module("myApp", [])

app.directive('donutChart', function(){
   function link(scope, el, attr){
     //d3.select(el[0]).append('svg')
      //var data = [82, 32, 63, 42]
      var data = scope.data 
      var color = d3.scale.category10() //giving it some color
      //var el = d3.select('div').node()
      var el = el[0]
      var width = el.clientWidth //dinamically changing its size
      var height = el.clientHeight
      var min = Math.min(width, height)
      var pie = d3.layout.pie().sort(null)
      var arc = d3.svg.arc().
            outerRadius(min / 2 * 0.9).
            innerRadius(min / 2 * 0.5)
      var svg = d3.select(el).append('svg').
            attr({width: width, height: height}).
            append('g').
            attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

      //add the path for each arc slice
      svg.selectAll('path').data(pie(data)). 
          enter().append('path').
          style('stroke', 'white').
          attr('d', arc).
          attr('fill', function(d,i){ return color(i) })
         }
   return {
    link: link, 
    restrict: 'E', 
    scope: { data: '=' }
   } 
})

app.controller('DonutChartController', function($scope){
  $scope.charts = [[2,34],[33,66],[50,50], [98,2]];
  //$scope.charts = d3.range(10).map(function(){
  //}) 
})



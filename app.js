var app = angular.module("myApp", [])

app.directive('donutChart', function(){
   function link(scope, el, attr){
     d3.select(el[0]).append('svg')
   }
   return {
    link: link
   } 
})


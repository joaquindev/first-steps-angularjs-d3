var data = [82, 32, 63, 42]
var color = d3.scale.category10() //giving it some color
var el = d3.select('div').node()
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

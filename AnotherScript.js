
var width = 300,
   height = 300;


var links = [
    {source: 'Ghana', target: 'France'},
    {source: 'France', target: 'DRC'},
    {source: 'Kenya', target: 'Belgium'},
    {source: 'Nigeria', target: 'US'},
    {source: 'France', target: 'Nigeria'},
    {source: 'US', target: 'Ghana'}
];

var nodes = {};

links.forEach(function(link){
    link.source = nodes[link.source] ||
        (nodes[link.source] = {name: link.source});
    link.target = nodes[link.target] ||
        (nodes[link.target] = {name: link.target});
});


var svg = d3.select('.chart').append('svg')
    .attr('width', width)
    .attr('height', height);


var force = d3.layout.force()
     .size([width, height])
     .nodes(d3.values(nodes))
     .links(links)
     .on("tick", tick)
     .linkDistance(100)
     .start();

var link = svg.selectAll('.link')
    .data(links)
    .enter().append('line')
    .attr('class', 'link');

var node = svg.selectAll('.node')
   .data(force.nodes())
   .enter().append('circle')
   .attr('class', 'node')
   .attr('r', width*0.03);


function tick(e) {
    node.attr('cx', function(d){return d.x;})
        .attr('cy', function(d){return d.y;})
        .call(force.drag);

    link.attr('x1', function(d){return d.source.x;})
        .attr('y1', function(d){return d.source.y;})
        .attr('x2', function(d){return d.target.x;})
        .attr('y2', function(d){return d.target.y;});
}
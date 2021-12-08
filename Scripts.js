const data = [
    {country:'West', art: 7},
    {country:'Central', art: 3},
    {country:'North', art: 0},
   
    {country:'East', art: 3},
    {country:'South', art:0}
   
    

];



const width = 800;
const height = 400;
const margin = {top:50, bottom:50, left:50, right:50};

const svg = d3.select('#graphs')
.append('svg')
.attr('height', height - margin.top - margin.bottom)
.attr('width', width - margin.left - margin.right)
.attr('viewBox', [0,0,width,height]);



const x = d3.scaleBand()
.domain(d3.range(data.length))
.range([margin.left, width - margin.right])
.padding(0.1);

const y = d3.scaleLinear()
.domain([0, 20])
.range([height - margin.bottom, margin.top]);

svg
.append('g')
.attr('fill', '#c34400')
.selectAll('rect')
.data(data)
.join('rect').attr('x', (d,i)=> x(i)).attr('y', (d)=> y(d.art)).attr('height', d =>y(0) - y(d.art)).attr('width', x.bandwidth())

function xAxis(g){
    g.attr('transform', `translate(0, ${height- margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].country))
    .attr('font-size', '8px')

}

function yAxis(g){
    g.attr('transform', `translate(0, ${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, data.format))
    .attr('font-size', '10px')


}

svg.append('g').call(yAxis);
svg.append('g').call(xAxis);
svg.node();






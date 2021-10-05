fetch('https://api.europeana.eu/record/v2/search.json?profile=standard&query=african%20art%20in%20europe&rows=12&start=1&wskey=irratengst')
.then(res=> console.log(res))

const data = [
    {country:'Benin', art: 3157},
    {country:'Cameroon', art: 7838},
    {country:'Chad', art: 9296},
    {country:'Congo-Brazzaville', art: 2593},
    {country:'Gabon', art: 2448},
    {country:'Guinea', art: 1997},
    {country:'Ivory Coast', art: 3951},
    {country:'Madagascar', art: 7590},
    {country:'Mali', art: 6910},
    {country:'Senegal', art: 2281}
    

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
.domain([0, 10000])
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
    .attr('font-size', '10px')

}

function yAxis(g){
    g.attr('transform', `translate(0, ${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, data.format))
    .attr('font-size', '10px')


}

svg.append('g').call(yAxis);
svg.append('g').call(xAxis);
svg.node();


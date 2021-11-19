


//API-Fetch
async function GetData(){
    const api_url = "https://api.artic.edu/api/v1/artworks/search?q=Arts%20of%20Africa/page=1&limit=100";
    const api_data = await fetch(api_url);
    const api_json =  await api_data.json();
    
    console.log(api_json);


}
(function(){
    var width = 500,
    height = 500;

    var svg = d3.select("#Intchart")
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g")
        .attr("transform", "translate(0,0)")

   d3.queue()
     .defer(d3.json, "https://api.artic.edu/api/v1/artworks/search?q=Arts%20of%20Africa/page=1&limit=100")
     .await(ready)

        
    function ready(error, datapoints){
        var circles = svg.selectAll(".title")
        .data(datapoints)
        .enter().append("circle")
        .attr("class", "title")
        .attr("r", 10)
        .attr("fill", "black")
    }

})();



GetData();



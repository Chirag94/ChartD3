var timeFrame="weekly.json";
d3.select("select")
  .on("change",function(d){
    var selected = d3.select("#d3-dropdown").node().value;
    console.log( selected );
    var timeFrame;
    if(selected=='Weekly') {
        timeFrame="weekly.json";
    
    }
    if(selected=='Monthly') timeFrame="monthly.json"
    if(selected=='Quarterly') timeFrame="quarterly.json"
    if(selected=='Yearly') timeFrame="yearly.json"
    FirstScript.draw(timeFrame)
    //d3.select("#selected-dropdown").text(selected);
})
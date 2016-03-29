var dem_al = [['Iowa', 44], ['New Hampshire', 24], ['Nevada', 35], ['South Carolina', 53], ['Alabama', 53], ['Arkansas', 32], ['Colorado', 66], ['Georgia', 102], ['Massachusetts', 91],['Minnesota', 77], ['Oklahoma', 38], ['Tennessee', 67], ['Texas', 222], ['Vermont', 16], ['Virginia', 95], ['Kansas', 33], ['Louisiana', 51], ['Nebraska', 25], ['Maine', 25], ['Michigan', 127], ['Mississippi', 34], ['Florida', 198], ['Illinois', 135], ['Missouri', 64], ['North Carolina', 104], ['Ohio', 141]];

var dem_unal = [['Arizona', 85], ['Idaho', 27], ['Utah', 37], ['Alaska', 20], ['Hawaii', 34], ['Washington State', 118], ['Wisconsin', 96], ['Wyoming', 18], ['New York', 291], ['Connecticut', 70], ['Delaware', 31], ['Maryland', 118], ['Pennsylvania', 210], ['Rhode Island', 33], ['Indiana', 92], ['West Virginia', 37], ['Kentucky', 61], ['Oregon', 74], ['California', 546], ['Montana', 27], ['New Jersey', 142], ['New Mexico', 43], ['North Dakota', 23], ['South Dakota', 25], ['District of Columbia', 45]];

var rep_al = [['Iowa', 30], ['New Hampshire', 23], ['Nevada', 30], ['South Carolina', 50], ['Alabama', 50], ['Alaska', 28], ['Arkansas', 40], ['Georgia', 76], ['Massachusetts', 42], ['Minnesota', 38], ['Oklahoma', 43], ['Tennessee', 58], ['Texas', 155], ['Vermont', 16], ['Virginia', 49], ['Kansas', 40], ['Kentucky', 46], ['Louisiana', 46], ['Maine', 23], ['Puerto Rico', 23], ['Hawaii', 19], ['Idaho', 32], ['Michigan', 59], ['Mississippi', 40], ['Virgin Islands', 9], ['District of Columbia', 19], ['Guam', 9], ['Wyoming', 29], ['Florida', 99], ['Illinois', 69], ['Missouri', 52], ['North Carolina', 72], ['Northern Marianas', 9], ['Ohio', 66]];

var rep_unal = [['American Samoa', 9], ['Arizona', 58], ['Utah', 40], ['North Dakota', 28], ['Wisconsin', 42], ['Colorado', 37], ['New York', 95], ['Connecticut', 28], ['Delaware', 16], ['Maryland', 38], ['Pennsylvania', 71], ['Rhode Island', 19], ['Indiana', 57], ['Nebraska', 36], ['West Virginia', 34], ['Oregon', 28], ['Washington', 44], ['California', 172], ['Montana', 27], ['New Jersey', 51], ['New Mexico', 24], ['South Dakota', 29]]


var i = -1;
d3.select(".ald")
  .selectAll("div") //2 spaces for unchanged selection
    .data(dem_al)// 4 spaces for changed selection
  .enter().append("div")
    .style("width", function(d) {
	    return (dem_al[i][1] * 7 + "px")};
    .text(function(d) { 
	    return (dem_al[i][0] + " " + dem_al[i][1]);});

d3.select(".not_ald")
 .selectAll("div") //2 spaces for unchanged selection
    .data(dem_al)// 4 spaces for changed selection
  .enter().append("div")
    .style("width", function(d) {
	    return (dem_unal[i][1] * 7 + "px")};
    .text(function(d) { 
	    return (dem_unal[i][0] + " " + dem_al[i][1]);});

d3.select(".alr")
 .selectAll("div") //2 spaces for unchanged selection
    .data(dem_al)// 4 spaces for changed selection
  .enter().append("div")
    .style("width", function(d) {
	    return (rep_al[i][1] * 7 + "px")};
    .text(function(d) { 
	    return (rep_al[i][0] + " " + dem_al[i][1]);});

d3.select(".not_alr")
 .selectAll("div") //2 spaces for unchanged selection
    .data(dem_al)// 4 spaces for changed selection
  .enter().append("div")
    .style("width", function(d) {
	    return (rep_unal[i][1] * 7 + "px")};
    .text(function(d) { 
	    return (rep_unal[i][0] + " " + dem_al[i][1]);});


//d3.select("body").transition()
 //    .style("background-color", "black");
var party = "democrat";

console.log(document.getElementById("democrat") );
console.log(document.getElementById("republican") );

var democrat = document.getElementById("democrat");
var republican = document.getElementById("republican");


//Democrat
democrat.style.cursor = "pointer";

democrat.onclick = function() {
    console.log("clicked democrat");
    
    d3.select("democrat").transition().style.display = "none"; 
    d3.select("republican").transition().style.display = "block";

    party = "republican";
    return true;
}

//Republican   
republican.style.cursor = "pointer";

republican.onclick = function() {
    console.log("clicked republican");
    
    d3.select("republican").transition().style.display = "none"; 
    d3.select("democrat").transition().style.display = "block";
        
    party = "democrat";
    return true;
}    
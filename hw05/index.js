var allocated_dels = [44, 24, 35, 53, 53, 32, 66, 102, 91, 77, 38, 67, 222, 16, 95, 6, 33, 51, 35, 25, 127, 34, 6, 198, 135, 64, 104, 141];
var states = ["Iowa", "New Hampshire","Nevada", "South Carolina", "Alabama", "Arkansas", "Colorado", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "American Samoa", "Kansas", "Louisiana", "Nebraska", "Maine", "Michigan", "Mississippi", "Northern Mariana Islands", "Florida", "Illinois", "Missouri", "North Carolina", "Ohio", "Arizona", "Idaho", "Utah", "Alaska", "Hawaii", "Washington", "Wisconsin", "Wyoming", "New York", "Connecticut", "Delaware", "Maryland", "Pennsylvania", "Rhode Island", "Indiana", "Guam", "West Virginia","Kentucky", "Oregon", "Virgin Islands", "Puerto Rico", "California", "Montana", "New Jersey", "New Mexico","North Dakota"  "South Dakota", "DC"];
var non_al_dels = [85, 27, 37, 37, 20, 34, 118, 96, 18, 291, 70, 31, 118, 201, 33, 92, 12, 37, 61, 74, 12, 67, 546, 27, 142, 43, 23, 25, 45];

var i = -1;
d3.select(".al")
  .selectAll("div") //2 spaces for unchanged selection
    .data(allocated_dels)// 4 spaces for changed selection
  .enter().append("div")
    .style("width", function(d) {
	    return d*10 + "px";})
    .text(function(d) { 
	    i++; 
	    return states[i] + " " + d;});

d3.select(".not_al")
  .selectAll("div") //2 spaces for unchanged selection                     
    .data(non_al_dels)// 4 spaces for changed selection         
  .enter().append("div")
    .style("width", function(d) {
            return d*10 + "px";})
    .text(function(d) {
            i++;
            return states[i] + " " + d;});
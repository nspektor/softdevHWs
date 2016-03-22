var allocated_dels = [44, 24, 35, 53, 53, 32, 66, 102, 91, 77, 38, 67, 222, 16, 95, 6, 33, 51, 35, 25, 127, 34, 6, 198, 135, 64, 104, 141];
var allocated_states = ["Iowa", "New Hampshire","Nevada", "South Carolina", "Alabama", "Arkansas", "Colorado", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "American Samoa", "Kansas", "Louisiana", "Nebraska", "Maine", "Michigan", "Mississippi", "Northern Mariana Islands", "Florida", "Illinois", "Missouri", "North Carolina", "Ohio"];
var non_al_dels = [85, 27, 37, 37, 20, 34, 118, 96 WISXCONSIN


d3.select(".chart")
  .selectAll("div") //2 spaces for unchanged selection
    .data(delData)// 4 spaces for changed selection
  .enter().append("div")
    .style("width", function(d) {
      return d*10 + "px";})
.text(function(d) {return states[i] + d;});


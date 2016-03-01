var pic = document.getElementById("vimage");

var change = function(e){
    e.preventDefault();
    this.setAttribute("fill", "green");
};
var drawDot = function(x,y){
    var c = document.createElementNS( "http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "30");
    c.setAttribute("fill", "yellow");
    c.setAttribute("stroke", "black");
    c.addEventListener("click", change);
    pic.appendChild(c);
};



var clicked = function(e){
    if( e.toElement == this){
	drawDot( e.offsetX, e.offsetY);
    }
};

pic.addEventListener("click", clicked);


//intervalID = window.setInterval(function, 16)
//document.getElementByTagName("circle")[0];
//radius = parseInt(c.getAttribute("r"));
//c.setAttribute("r", radius.toString());

//var c = document.getElementNS(svgwebIDthing, "circle")
//window.clearInterval(IntervalID);

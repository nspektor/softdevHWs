//Nellie Spektor
//SoftDev pd3
//hw04
//2016-03-01

//scg connection
var pic = document.getElementById("vimage");
//button connection
var circleButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");
var dvdButton = document.getElementById("dvd");

var intervalID;
var radius = 0;
var growing = true; 
var logo = new Image();
logo.src = "dvd.png";

var circle =  function(e){
    //circle button
    e.preventDefault();
    intervalID=window.setInterval(drawDot(), 16);
};

var stopIt = function(e){
    e.preventDefault();
    window.clearInterval(intervalID);

};

var dvd = function(e){
    e.preventDefault();
    intervalID = window.setInterval(bounceDVD(), 16);
};

var drawDot = function(){
    var c = document.createElementNS( "http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", c.width/2);
    c.setAttribute("cy", c.height/2);
    c.setAttribute("r", radius.toString());
    c.setAttribute("fill", "yellow");
    c.setAttribute("stroke", "black");
    c.addEventListener("click", change);
    pic.appendChild(c);

    ctx.clearRect(0, 0, 538, 538);
    
    //circle drawing
    ctx.beginPath();
    ctx.fillStyle = "#6666ff";
    ctx.arc(c.width/2, c.height/2, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    if (growing){
	radius ++;
    }
    else{
	radius --;
    }
    if (radius == 0 || radius == c.width/2){
	growing = !growing;
    }

    ctx.strokeRect(0, 0, 538, 538);
    requestID = window.requestAnimationFrame(drawDot);
};



//intervalID = window.setInterval(function, 16)
//document.getElementByTagName("circle")[0];
//radius = parseInt(c.getAttribute("r"));
//c.setAttribute("r", radius.toString());

//var c = document.getElementNS(svgwebIDthing, "circle")
//window.clearInterval(IntervalID);
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
    window.setInterval(drawDot(), 16);
};

var stop = function(e){
    e.preventDefault();
    window.clearInterval(intervalID);

};

var dvd = function(e){
    e.preventDefault();
    intervalID = window.setInterval(bounceDVD(), 16);
};

var drawDot = function(){
    var c = document.createElementNS( "http://www.w3.org/2000/svg", "circle");
  
    c.setAttribute("cx", 250);
    c.setAttribute("cy", 250);
    c.setAttribute("r", radius.toString());
    c.setAttribute("fill", "yellow");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);

    c = document.getElementsByTagName("circle")[0];
    radius = parseInt(c.getAttribute("r")); 
    
    if (growing){
	radius ++;
    }
    else{
	radius --;
    }
    if (radius == 0 || radius == 250){
	growing = !growing;
    }

    c.setAttribute("r", radius.toString());

    intervalID=window.setInterval(drawDot(), 16);

};

var down = true;//going down                                                    
var right = true;//going right                                                  
var x = 0;
var y = 0;

var dvd = function() {
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
    var d = document.createElementNS("http://www.w3.org/2000/svg", 'image');
    d.setAttribute("height", 60);
    d.setAttribute("width", 90);
    d.setAttribute("x", x);
    d.setAttribute("y", y);
    d.setAttributeNS('http://www.w3.org/1999/xlink','href','dvd.png');
    pic.appendChild(d);
    if(down){
        y++;
    }
    else{
        y--;
    }
    if(right){
        x++;
    }
    else{
        x--;
    }
    if(x == (538-186) || x==0){
        right = !right;
    }
    if(y ==(538-84) || y==0){
        down =!down;
    }
    intervalID = window.setInterval(dvd, 16);
}

circleButton.addEventListener("click", circle);
dvdButton.addEventListener("click", dvd);
stopButton.addEventListener("click", stop);

//intervalID = window.setInterval(function, 16)

//radius =parseInt(c.getAttribute("r"));
//c.setAttribute("r", radius.toString());

//var c = document.getElementNS(svgwebIDthing, "circle")
//window.clearInterval(IntervalID);
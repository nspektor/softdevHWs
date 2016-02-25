//Nellie Spektor                                                               
//SoftDev2 pd3                                                                 
//HW03 Are We Ever Going to Start the Movie?                                
//2016-02-24

//connection to index.html
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
//button connection
var circleButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");
var dvdButton = document.getElementById("dvd");
//drawing rectangle
ctx.strokeRect(0, 0, 538, 538);

var requestID;
var radius = 0;
var growing = true; 
var logo = new Image();
logo.src = "dvd.png";

var circle =  function(e){
    //circle button
    e.preventDefault();
    window.requestAnimationFrame(drawDot);
};

var stopIt = function(e){
    e.preventDefault();
    window.cancelAnimationFrame(requestID);

};

var dvd = function(e){
    e.preventDefault();
    window.requestAnimationFrame(bounceDVD);
};

var drawDot = function(){
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

var down = true;//going down
var right = true;//going right
var x = 0;
var y = 0;

var bounceDVD = function(){
    ctx.clearRect(0,0,538,538);

    //starting point
    ctx.drawImage(logo, x, y, 186, 84);
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
    ctx.strokeRect(0, 0, 538, 538);
    requestID = window.requestAnimationFrame(bounceDVD);

};


circleButton.addEventListener("click", circle);
stopButton.addEventListener("click", stopIt);
dvdButton.addEventListener("click", dvd);
console.log("script loaded");
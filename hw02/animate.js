//Nellie Spektor                                                               
//SoftDev2 pd3                                                                 
//HW2 Circular                                                                 
//2016-02-23

//connection to index.html
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
//button connection
var button = document.getElementById("start");
//drawing rectangle
ctx.strokeRect(0, 0, 538, 538);


var radius = 0;
var growing = true; 

var start =  function(e){
    //start button
    e.preventDefault();
    window.requestAnimationFrame(drawDot);
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
    window.requestAnimationFrame(drawDot);
};


button.addEventListener("click", start);
console.log("script loaded");
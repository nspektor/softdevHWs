//Nellie Spektor
//SoftDev2 pd3
//HW2b Dot, Dot, Dot
//2016-02-12

//connection to html
var c = document.getElementById( "playground" );
var ctx = c.getContext( "2d" );

//fill in canvas
ctx.fillStyle = "#33ccff";
ctx.fillRect( 0, 0, 538, 538 );
ctx.strokeRect(0,0,538,538);
ctx.fillStyle = "#3333cc";

var clearButton = document.getElementById("clear");
//clear the screen of dots
var clear = function(e){
    e.preventDefault();
    //set colors
    ctx.fillStyle = "#33ccff";
    ctx.strokeStyle = "#000000";
    //clear canvas and redraw outline
    ctx.clearRect(0,0,538,538);
    ctx.fillRect(0,0,538,538);
    ctx.strokeRect(0,0,538,538);
    //reset x and y
    //x = -1;
    //y = -1;
    ctx.fillStyle = "#3333cc";
    ctx.beginPath(); //get ready for line drawing

}
    
var drawDot = function(e){
    e.preventDefault();

    //draw line to current point from last point
    ctx.lineTo( e.offsetX, e.offsetY);
    ctx.stroke();

    //draw dot
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 7, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    //get ready for the line and next dot
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

clearButton.addEventListener( "click", clear); //connect clear button
c.addEventListener("click", drawDot); //make drawing work
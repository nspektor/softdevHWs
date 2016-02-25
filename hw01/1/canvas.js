// Nellie Spektor
// SoftDev2 pd3 
// HW01b Finding Your Path Around the Canvas 
// 2016-02-11

//connection to index.html
var c = document.getElementById( "ftb2maga" );
var ctx = c.getContext( "2d" );

ctx.fillStyle = "#66d9ff" ; //set color for filled in rectangle
ctx.fillRect( 0, 0, 538, 538 );  //draw a filled in rectangle

ctx.strokeStyle = "#9900cc";  //set color for outlined rectangle
ctx.strokeRect( 20, 20, 498, 498 );  //draws the outlined rectangle

ctx.fillStyle = "#5900b3";  //set color for filled in circle
ctx.arc( 269, 269, 50,0, 2*Math.PI); //draw circle
ctx.fill(); 

ctx.strokeStyle = "#ff0000";//set color for star

//draw path for star
ctx.beginPath();
ctx.moveTo(30, 230);
ctx.lineTo(200, 200);
ctx.moveTo(200, 200);
ctx.lineTo(269, 30);
ctx.moveTo(269, 30);
ctx.lineTo(338, 200);
ctx.moveTo(338, 200);
ctx.lineTo(508, 230);
ctx.moveTo(508, 230);
ctx.lineTo(338, 330);
ctx.moveTo(338, 330);
ctx.lineTo(410, 480);
ctx.moveTo(410, 480);
ctx.lineTo(269, 350);
ctx.moveTo(269, 350);
ctx.lineTo(128, 480);
ctx.moveTo(128, 480);
ctx.lineTo(200, 330);
ctx.moveTo(200, 330);
ctx.lineTo(30, 230);
ctx.stroke();//draw star
ctx.closepath();
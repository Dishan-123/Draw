canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
 
var mouseevent="empty";

var lastpositionofx, lastpositionofy;

color="white";

widthofline= 1;

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e)
{ color=document.getElementById("color").value;

  widthofline = document.getElementById("width").value;

  mouseevent="mousedown";

}

canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e)
{currentpositionofx=e.clientX-canvas.offsetLeft;
currentpositionofy=e.clientY-canvas.offsetTop;
if (mouseevent=="mousedown")
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth= widthofline;
    ctx.moveTo(lastpositionofx,lastpositionofy);
    ctx.lineTo(currentpositionofx,currentpositionofy);
    ctx.stroke();
}
lastpositionofx=currentpositionofx;
lastpositionofy=currentpositionofy;}

canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e)
{mouseevent="mouseup";}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e)
{mouseevent="mouseleave";}

function cleararea()
{ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);}






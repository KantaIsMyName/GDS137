
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");	

//Set the Animation Timer

var ball = new Ball();

ball.x=canvas.width;
ball.x-= 50;

ball.width = 200;
ball.vx = 5;
ball.vx = -ball.vx;
//ball.vy = -2;
var mainTimer = setInterval(animate, 1000/60);
function animate() // moving and drawing functions
{
//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	ball.move();

	ball.draw()
}
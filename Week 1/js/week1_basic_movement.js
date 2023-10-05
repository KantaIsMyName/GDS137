// making the functions
//1000 ms or 1 second / FPS
	//Set Up the Canvas
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");	
	
	//Set the Animation Timer
	var timer = setInterval(animate, 1000/60);


	var ball = new Ball();

	ball.width = 200;
	//ball.vx = 2;
	//ball.vy = -2;

function animate() // moving and drawing functions
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	ball.move();

	ball.draw()
}

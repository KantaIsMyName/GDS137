var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player = new GameObject();
	
	//------Declare the Player's speed on the x and y axis------
	player.vx = 0;
	player.vy = 0;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);

var ball; 
	ball = new GameObject();

	// declare ball speed //
	ball.vx = 5;
	ball.vy = 5;
	ball.width = 50;
	ball.height = 50;

	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	

	//Move the Player to the right
	/*if(d)
	{
		console.log("Moving Right");
		player.x += 2;w
	}
	if(a)
	{
		console.log("Moving Left");
		player.x += -2;
	}*/
	if(w)
	{
		console.log("Moving Right");
		player.y += -2;
	} 
	if(s)
	{
		console.log("Moving Left");
		player.y += 2;
	}

	//----Movement Using the Player's move() function----
	player.move();
	ball.move();
	//---------------------------------------------------
	
	
	if(player.y > canvas.width - player.height/2)
	{
		player.y = canvas.height;
	}

	if(player.y < 0 + player.height/2)
	{
		player.y = 0 + player.height/2;
	} 
	
	// Ball boundaries //
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width;
		ball.x-= 50
		ball.vx = -ball.vx;

	}

	if(ball.x < 0 )
	{
		ball.x = 0 + ball.width/2;
		ball.x -= 10
		ball.vx = -ball.vx;

	}  
	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2;
		ball.vy = -ball.vy;
	}

	if(ball.y < 0 )
	{
		ball.y = 0 + ball.height/2;
		ball.y -= 10
		ball.vy = -ball.vy;
	} 

	player.drawRect();
	//ball.drawCircle();
	
}
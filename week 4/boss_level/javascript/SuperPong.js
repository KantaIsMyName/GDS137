var canvas;
var context;
var timer;
var interval = 1000/60;

//--------------------------------------------------------
var player;
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	// scoreboard text
	context.font = "16px Arial";


	player = new GameObject();
	
	player.x = 10;
	player.y = canvas.height/2;
	player.vx = 0;
	player.vy = 0;
	player.width = 40;
	player.height = 200;
	
	timer = setInterval(animate, interval);

var ball; 
	ball = new GameObject();

	// declare ball speed //
	ball.vx = 5;
	ball.vy = 0;
	ball.width = 80;
	ball.height = 80;
	

	ball.x = canvas.width/2
	ball.y = canvas.height/2

	timer = setInterval(animate, interval);

// win counter 
var p1Wins = 0;

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	if(w)
	{
		console.log("Moving Right");
		player.vy = 4;
	} 
	if(d)
	{
		console.log("Moving Left");
		player.vy += 4;
	}
	
	player.move();
	ball.move();
	

	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2;
		player.vx = 0
	} 

	if(player.x < 0 + player.width/2)
	{
		player.x = 0 + player.width/2;
		player.vx = 0
	} 

	// Ball boundaries //
	//right side boundary
	if(ball.x > canvas.width - ball.width/2)
	{
		//ball.x = canvas.width;
		ball.x-= 35
		ball.vx = -ball.vx;

	}

	// left
	if(ball.x < 0 + ball.width/2)
	{
		ball.x = 0 + ball.width/2;
		ball.x -= 1
		ball.vx = -ball.vx;

	} 

	// bottom
	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2;
		ball.vy = -ball.vy * .67;
		p1Wins = 0;
	}

	// top
	if(ball.y < 0 )
	{
		ball.y = 0;
		ball.vy = -ball.vy;
		
	} 

	// Bounce ball off paddle

	if (ball.hitTestObject(player))
	{
		p1Wins++

		ball.x = ball.x + player.height/2

		ball.vx = -ball.vx
		console.log("collision")

	
		//middle reaches
		// inner left
		if(ball.x > player.x + player.height/6)
		{
			ball.vx = ball.vx
			ball.vy = ball.vy
		}
		// inner right 
		if(ball.x < player.x - player.height/6)
		{
			ball.vx = ball.vx
			ball.vy = ball.vy
		}
		// outer reaches
		// left
		if (ball.x > player.x - player.height/3)
		{
			ball.vx = ball.vx
			ball.vy = ball.vy
		}
		
		//right
		if (ball.x < player.x - player.height/3)
		{
			ball.vx = ball.vx
			ball.vy = ball.vy
		}

	}

	// game entities
	player.drawRect();
	// player2.drawRect();
	ball.drawCircle();

	// draw ric
	//context.drawImage(img, ball.x-15, ball.y-15, 30, 30);
	
	// scoreboard
	// context.fillText("Player1:       						 |    		 	     			Player2: ", canvas.width/2 - 300, 50)
	context.fillText("Score: ", canvas.width/2 - 400, 50)
	context.fillText(p1Wins, canvas.width/2 - 354, 50)
	// context.fillText(p2Wins, canvas.width/2 + 220, 50)
}
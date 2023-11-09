// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
//---------------Set Friction and Gravity-----------------
var frictionX = .65;	
var frictionY = .97;
var gravity = 1;
var force = .97;
var ax = .5;
//--------------------------------------------------------
var player;
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	// scoreboard text
	context.font = "16px Arial";


	player = new GameObject();
	
	player.x = canvas.width/2;
	player.y = canvas.height - 40;
	player.vx *= frictionX, force;
	player.vy = 0;
	player.width = 250;
	player.height = 40;


	player.force = 2;
	
	timer = setInterval(animate, interval);

/* var player2;
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player2 = new GameObject();
	
	player2.x = canvas.width 
	player2.y = canvas.height/2
	player2.vx = 0;
	player2.vy = 0;
	player2.width = 40;
	player2.height = 150

	player2.force = 2;
	
	timer = setInterval(animate, interval);
*/
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
// var p2Wins = 0;

//ric
// var img = document.getElementById("ric");

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Call just one of the functions below to view acceleration, friction, gravity and pixel lock.
	//showAcceleration();
	//showFriction();
	//showGravity();
	//showPixelLock();
	//showBounce();
	/*if(up)
	{
		console.log("Moving up");
		player2.y += -3;
	} 
	if(down)
	{
		console.log("Moving down");
		player2.y += 3;
	}

	if(w)
	{
		console.log("Moving up");
		player.y += -3;
	} 
	if(s)
	{
		console.log("Moving down");
		player.y += 3;
	}*/

	if(a)
	{
		console.log("Moving Right");
		player.vx -= ax;
	} 
	if(d)
	{
		console.log("Moving Left");
		player.vx += ax;
	}
	
	player.move();
	//player2.move();
	ball.vy += gravity;
	ball.move();
	

	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2;
	} 

	if(player.x < 0 + player.width/2)
	{
		player.x = 0 + player.width/2;
	} 

	// player 2 boundary
	/*if(player2.y < 0 + player2.height/2)
	{
		player2.y = 0 + player2.height/2;
	} 
	if(player2.y > canvas.height - player2.height/2)
	{
		player2.y = canvas.height - player.height/2;
	}*/
	
	
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
		/*
		if (ball.y > canvas.height + ball.height/6)
		{
			ball.vx = 5;
			ball.vy = 5;
		}

		if (ball.y < canvas.height - ball.height/6)
		{
			ball.vx = 5;
			ball.vy = 5;
		} */
		console.log("collision")

	
		//middle reaches
		// inner left
		if(ball.x > player.x + player.height/6)
		{
			ball.vx = -ball.force
			ball.vy = -30
		}
		// inner right 
		if(ball.x < player.x - player.height/6)
		{
			ball.vx = -ball.force
			ball.vy = -30
		}
		// outer reaches
		// left
		if (ball.x > player.x - player.height/3)
		{
			ball.vx = ball.force * 5
			ball.vy = -35
		}
		
		//right
		if (ball.x < player.x - player.height/3)
		{
			ball.vx = -ball.force * 5
			ball.vy = -35
		}

	}

	/* player 2 paddle boundary
	if (ball.hitTestObject(player2))
	{
		ball.x = player2.x - player2.width/2 - ball.width

		ball.vx = ball.vx
		
		if (ball.y > canvas.height + ball.height/6)
		{
			ball.vx = 5;
			ball.vy = 5;
		}

		if (ball.y < canvas.height - ball.height/6)
		{
			ball.vx = 5;
			ball.vy = 5;
		} 
		console.log("collision")
		
		if (ball.y > player2.y - player2.height/3)
		{
			ball.vx = -3
			ball.vy = 3
		}
		
		if (ball.y < player2.y - player2.height/6)
		{
			ball.vx = -3
			ball.vy = -3
		}

	}*/

	context.save();
	context.strokeStyle = "magenta";
	context.beginPath();
	context.moveTo(player.x, player.y);
	context.lineTo(ball.x, ball.y);
	context.closePath();
	context.lineWidth = 3;
	context.stroke();
	context.restore();

	

	// game entities
	player.drawRect();
	// player2.drawRect();
	ball.drawCircle();

	// draw ric
	//context.drawImage(img, ball.x-15, ball.y-15, 30, 30);
	
	// scoreboard
	// context.fillText("Player1:       						 |    		 	     			Player2: ", canvas.width/2 - 300, 50)
	context.fillText("Score: ", canvas.width/2 - 400, 50)
	context.fillText(p1Wins, canvas.width/2 - 340, 50)
	// context.fillText(p2Wins, canvas.width/2 + 220, 50)
}


/*IMPORTANT: Below are four functions that demonstrate the various elements we will use to simulating Game Physics.
each function is a copy of the previous with more functionality added. 
ONLY CALL ONE OF THESE FUNCTIONS AT A TIME!!!!!!!!*/



function showAcceleration()
{
	//--------------Use Velocity and Acceleration to move around----------------------
	if(down)
	{	
		player.vx +=  player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(up)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	//---------------------------------------------------------------------------------------
	player.x += player.vx;
	player.y += player.vy;
}

function showFriction()
{
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	
	//--------------Apply friction to the Velocity X-----------------------------------------
	player.vx *= frictionX;
	//---------------------------------------------------------------------------------------
	player.x += player.vx;
}

function showGravity()
{
	
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	
	//--------------Apply Gravity to the Velocity Y-----------------------------------------
	player.vy += gravity;
	player.y += player.vy;
	//---------------------------------------------------------------------------------------
	
	player.vx *= frictionX;
	player.x += player.vx;
}

function showPixelLock()
{
	
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	

	player.vx *= frictionX;	
	player.vy *= frictionY;
	
	//------Round the velocity before applying it to the position.--------------------------
    //------This will keep the object from moving fractions of a pixel----------------------
	//------This might not be noticeable now, but will help alot when things get complex----
	player.y += Math.round(player.vy);
	player.x += Math.round(player.vx);
	//--------------------------------------------------------------------------------------
}

function showBounce()
{
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	
	player.vy *= frictionY;
	player.vx *= frictionX;
	
	player.vy += gravity;
	
	player.x += player.vx;
	player.y += player.vy;
	
	//--------------------Check Collision------------------------------------------------------
	if(player.y > canvas.height - player.height/2)
	{
		
		//--------Bounce the Ball---------------------------------------------------------------
		player.y = canvas.height - player.height/2;
		//the decimal is how bouncy you want the object to be
		//It should be a number between 0 and 2;
		player.vy = -player.vy * .99;
	}
	
	
	//-----------------------------------------------------------------------------------------
}



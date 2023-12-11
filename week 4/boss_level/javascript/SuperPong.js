// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
//---------------Set Friction and Gravity----------------- physics
var frictionX = .85;	
var frictionY = .97;
var gravity = 1;
var force = .97;
var ax = .5;
//--------------------------------------------------------P1
var player;
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	// scoreboard text
	context.font = "16px Arial";


	player = new GameObject();
	
	player.x = 30;
	player.y = canvas.height/2;
	player.vx = 0;
	player.vy = frictionY * force + 0;
	player.width = 40;
	player.height = 250;


	player.force = 1;
	
//--------------------------------------------------- P2

var player2;
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	// scoreboard text
	context.font = "16px Arial";


	player2 = new GameObject();
	
	player2.x = canvas.width - 30;
	player2.y = canvas.height/2;
	player2.vx = 0;
	player2.vy = frictionY * force + 0;
	player2.width = 40;
	player2.height = 250;


	player2.force = 1;
	timer = setInterval(animate, interval);

	//---------------------------------------------- Ball
var ball; 
	ball = new GameObject();

	// declare ball speed //
	ball.vx = 3;
	ball.vy = 3;
	ball.width = 50;
	ball.height = 50;
	

	ball.x = canvas.width/2
	ball.y = canvas.height/2

	timer = setInterval(animate, interval);

//---------------------------------------------- win counter 
var p1Wins = 0;
var p2Wins = 0;

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	//--------------------P1 Movement	
	if(w)
	{
		console.log("Moving up");
		player.vy -= ax;
	} 
	if(s)
	{
		console.log("Moving down");
		player.vy += ax;
	}
	//-------------------P2 Movement
	if(up)
	{
		console.log("Moving up");
		player2.vy -= ax;
	} 
	if(down)
	{
		console.log("Moving down");
		player2.vy += ax;
	}
	player.move();

	
	player2.move();
	ball.move();
	
//========================player 1 boundary
	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2;
		player.vy = 0
	} 

	if(player.y < 0 + player.height/2)
	{
		player.y = 0 + player.height/2;
		player.vy = 0
	} 

//==========================player 2 boundary
if(player2.y > canvas.height - player2.height/2)
	{
		player2.y = canvas.height - player2.height/2;
		player2.vy = 0
	} 

	if(player2.y < 0 + player2.height/2)
	{
		player2.y = 0 + player2.height/2;
		player2.vy = 0
	} 

	// ---------------------Ball boundaries--------------------- //
	//right side boundary 
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width/2 
		ball.y = canvas.height/2
		ball.vx = -1;
		ball.vy = 3; 
		p1Wins++

	}
	// left
	if(ball.x < 0 + ball.width/2)
	{
		ball.x = canvas.width/2 
		ball.y = canvas.height/2
		ball.vx = 1;
		ball.vy = 3; 
		p2Wins++
	} 
	// bottom
	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2;
		ball.vy = -ball.vy 
	}
	// top
	if(ball.y < 0 )
	{
		ball.y = 0;
		ball.vy = -ball.vy;
		
	} 

	// Bounce ball off player 1 ---------------------------------------------

	if (ball.hitTestObject(player))
	{
		console.log("collision w p1");

		ball.x = player.x + player.width/2 + ball.width

		ball.vx = -ball.vx
		// lower hit
		if (ball.y > player.y - player.height/3)
		{
			ball.vx = vx * .1;
			ball.vy = vy * .1;
		}
		//center hit
		if (ball.x < player.x + player.width/2)
		{
			ball.vx = -vx	
		}
		// upper hit
		if (ball.y < player.y - player.height/6)
		{
			ball.vx = vx * .1;
			ball.vy -= vy * .1;
		}

	}
	// Bounce ball off player 2 ---------------------------------------------
	if (ball.hitTestObject(player2))
	{
		console.log("collision w p2");

		ball.x = player2.x - player2.width/2 - ball.width

		ball.vx = -ball.vx		
		// lower hit
		if (ball.y < player2.y - player2.height/3)
		{
			ball.vx -= vx * .1;
			ball.vy = vy * .1;
		}
		//center hit
		if (ball.x > player2.x + player2.width/2)
		{
			ball.vx = +vx;
		}
		// upper hit
		if (ball.y > player2.y + player2.height/6)
		{
			ball.vx -= 3 * .1;
			ball.vy -= vy * .1;
		}

	}

	// game entities
	player.drawRect();
	player2.drawRect();
	ball.drawCircle();

	// draw ric
	//context.drawImage(img, ball.x-15, ball.y-15, 30, 30);

	context.save();
	context.strokestyle = "black";
	context.beginPath();
	context.moveTo(canvas.width/2, 0);
	context.lineTo(canvas.width/2, canvas.height);
	context.closePath();
	context.lineWidth = 5;
	context.stroke();
	context.restore();
	
	// scoreboard
	context.fillText("Player 1: ", canvas.width/2 - 300, 50)
	context.fillText("Player 2: ", canvas.width/2 + 100, 50)
	context.fillText(p1Wins, canvas.width/2 - 200, 50)
	context.fillText(p2Wins, canvas.width/2 + 200, 50)
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


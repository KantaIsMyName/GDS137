// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
//---------------Set Friction and Gravity-----------------
var frictionX = .85;	
var frictionY = .97;
var gravity = 1;
//--------------------------------------------------------
var player;
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player = new GameObject();
	
	player.x = 5
	player.y = canvas.height/2
	player.vx = 0;
	player.vy = 0;

	player.force = 2;
	
	timer = setInterval(animate, interval);

var player2;
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player2 = new GameObject();
	
	player2.x = canvas.width 
	player2.y = canvas.height/2
	player2.vx = 0;
	player2.vy = 0;

	player2.force = 2;
	
	timer = setInterval(animate, interval);

var ball; 
	ball = new GameObject();

	// declare ball speed //
	ball.vx = -3;
	ball.vy = 3;
	ball.width = 50;
	ball.height = 50;

	ball.x = canvas.width/2
	ball.y = canvas.height/2

	timer = setInterval(animate, interval);

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Call just one of the functions below to view acceleration, friction, gravity and pixel lock.
	//showAcceleration();
	//showFriction();
	//showGravity();
	//showPixelLock();
	//showBounce();
	if(w)
	{
		console.log("Moving Right");
		player.y += -3;
	} 
	if(s)
	{
		console.log("Moving Left");
		player.y += 3;
	}
	
	player.move();
	player2.move();
	ball.move();

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
		ball.x = canvas.width/2;
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
		ball.vy = -ball.vy;
	} 

	// Bounce ball off paddle

	if (ball.hitTestObject(player))
	{
		ball.x = player.x + player.width/2 + ball.width

		ball.vx = -ball.vx
		
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
		
		if (ball.y > player.y - player.height/3)
		{
			ball.vx = 3
			ball.vy = 3
		}
		
		if (ball.y < player.y - player.height/6)
		{
			ball.vx = 3
			ball.vy = -3
		}

	}
	
	player.drawRect();
	player2.drawRect();
	ball.drawCircle();
}


/*IMPORTANT: Below are four functions that demonstrate the various elements we will use to simulating Game Physics.
each function is a copy of the previous with more functionality added. 
ONLY CALL ONE OF THESE FUNCTIONS AT A TIME!!!!!!!!*/



function showAcceleration()
{
	//--------------Use Velocity and Acceleration to move around----------------------
	if(d)
	{	
		player.vx +=  player.ax * player.force;
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



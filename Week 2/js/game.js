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
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	/*if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width;
		player.x-= 50
		player.vx = -player.vx;

	}

	if(player.x < 0 + player.width/2)
	{
		player.x = 0 + player.width/2;
		player.x -= 10
		player.vx = -player.vx;

	} */ 
	if(player.y > canvas.width - player.height/2)
	{
		player.y = canvas.height;
		//player.y-= 50
		//player.vy = -player.vy;

	}

	if(player.y < 0 + player.height/2)
	{
		player.y = 0 + player.height/2;
		//player.y -= 10
		//player.vy = -player.vy;

	} 
	

	player.drawRect();


}
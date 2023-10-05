// JavaScript Document
function Player()
{
	//player's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//player's dimensions
	this.width = 100;
	this.height = 100;
	
	//player's velocity or speed on each axis
	this.vx = 512;
	this.vy = 400;
	
	//player's color
	this.color = "#ff0000";
	
	//This draws the player to the screen
	this.draw = function()
	{
		context.save(); // saves default of canvas
			context.fillStyle = this.color; // picks the color
			context.translate(this.x, this.y); // moves 0, 0 to the current crosshair placement
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height); // draws the space
		context.restore(); // restores to normal
		
	}	
	
	//This changes the player's position
	this.move = function() // designates the movement pace
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}

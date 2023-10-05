// JavaScript Document
function Ball()
{

	//player's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//player's dimensions
	this.width = 50;
	this.height = 50;
	
	//player's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//player's color
	this.color = "#0000ff";
	
	//This draws the player to the screen
	this.draw = function()
	{
        context.save(); // saves default of canvas
            context.fillStyle = this.color; // picks the color
            context.translate(this.x, this.y);
            context.beginPath();
            context.arc(0,0,this.width/2,0,360*Math.PI/180,true)
            context.closePath();
            context.fill();
        context.restore();
        
	}	
	
	//This changes the player's position
	this.move = function() // designates the movement pace
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}


//Define Booleans for each key
var s = false;
var w = false;
var down = false;
var up = false;
var f = false;
var l = false;
var g = false; 
var b = false;

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Pressed" + e.keyCode);
	
	if(e.keyCode == 38)
	{
		up = true;
	}
	if(e.keyCode == 40)
	{
		down = true;
	}
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
	if(e.keyCode == 70)
	{
		f = true;
	}
	if(e.keyCode == 76)
	{
		l = true;
	}
	if(e.keyCode == 71)
	{
		g = true;
	}
	if(e.keyCode == 66)
	{
		b = true;
	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	if(e.keyCode == 38)
	{
		up = false;
	}
	if(e.keyCode == 40)
	{
		down = false;
	}
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 70)
	{
		f = false;
	}
	if(e.keyCode == 76)
	{
		l = false;
	}
	if(e.keyCode == 71)
	{
		g = false;
	}
	if(e.keyCode == 66)
	{
		b = false;
	}
}
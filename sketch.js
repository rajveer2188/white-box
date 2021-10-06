var ball
function setup() {

  createCanvas(400,400)
  ball = createSprite(200,200,10,10)
  ball.shapeColour = "white"


}

function draw() 
{
  background("black");

if(keyIsDown(RIGHT_ARROW))
{ 
  background("cyan");

ball.x = ball.x+2
}


if(keyIsDown(LEFT_ARROW))
{
ball.x = ball.x-2
}


if(keyIsDown(UP_ARROW))
{
ball.y = ball.y-2
}


if(keyIsDown(DOWN_ARROW))
{
ball.y = ball.y+2
}





drawSprites()
}




















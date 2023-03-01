
function setup() {
  createCanvas(400,400);
ball=createSprite(200,200,20,20)

}

function draw() 
{
  background(30);
  drawSprites()
if (keyDown("right")){
ball.velocityX=4
}
if (keyDown("left")){
  ball.velocityX=-4
}
if (keyDown("up")){
  ball.velocityY=-4
}
if (keyDown("down")){
  ball.velocityY=4
}
}





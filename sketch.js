var iss, bg, sleep, brush, gym, gym2, sleep 
var astronaut

function preload( ) {
  bg = loadImage("images/iss.png")
  sleep = loadAnimation("images/sleep.png")
  brush = loadAnimation("images/brush.png")
  gym = loadAnimation("images/gym11.png","images/gym12.png")
  eat = loadAnimation("images/eat1.png","images/eat2.png")
  drink = loadAnimation("images/drink1.png","images/drink2.png")
  move = loadAnimation("images/move.png","images/move1.png")
  
}



function setup() {
  createCanvas(700,375);
  iss = createSprite(250,150);
  iss.addAnimation("background",bg);
  iss.scale = 0.1;

  astronaut = createSprite(250,190);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.075;  

}

function draw() {
  background(255,255,255);
  

  createEdgeSprites();

  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 190;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("m")) {
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.velocityX = Math.round(random(-2,2))
    astronaut.velocityY = Math.round(random(-2,2))
  }






  astronaut.collide[0,1,2,3];

  drawSprites();  
}





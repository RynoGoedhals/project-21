var bg, sleep, brush, gym, eat, drink, move, bath;
var astronaut;
var edges;

function preload(){

  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym11.png", "images/gym12.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");

}

function setup(){
  createCanvas(400, 400);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

  edges = createEdgeSprites();


}

function draw(){
  background(bg);

  astronaut.bounceOff(edges);
  

  text("Instructions:", 10, 10);
  text("Up Arrow = Brushing", 10, 20);
  text("Down Arrow = Gymming", 10, 30);
  text("Left Arrow = Eating", 10, 40);
  text("Right Arrow = Bathing", 10, 50);
  text("M Key = Moving", 10, 60);

  if(keyDown("up_arrow")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("down_arrow")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("left_arrow")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("right_arrow")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  drawSprites();
}

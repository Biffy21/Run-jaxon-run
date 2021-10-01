var path;
var runner;
var runner_running;
var pathImg
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path=createSprite(200,200);
  path.addImage("path",pathImg);
  path.velocityY=4;
  path.scale=1.2;
 
  runner=createSprite(200,300);
  runner.addAnimation("run",runner_running);
 runner.scale= 0.09;
}

function draw() {
  background("white");

  if(path.y > 400){
    path.y = height/2;
  }
drawSprites();
}

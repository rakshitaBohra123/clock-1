const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var h=hour();
var m=minute();
var s=seconds();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  



  Engine.run(engine);

}

function draw() {
  background(255,255,255);  
  
  ScAngle = map(sc, 0, width, 40, 300);
  stroke(255, 0, 0);
  strokeWeight(7)
  line(0,0,100,0)
  angleMode(DEGREES);
  
  
  
  
  drawSprites();
}

function hour(){
  text("Current hour:\n" + h, 5, 50);
  push();
  translate(0,0);
  rotate(ScAngle)
  stroke("skyblue");
  strokeWeight(7)
  line(0,0,100,0)
  pop();
}

function minute(){
  text("Current minute: \n" + m, 5, 50);
  push();
  translate(0,0)
  rotate(ScAngle)
  stroke("pink");
  strokeWeight(7)
  line(0,0,100,0)
  pop();
}

function seconds(){
  text("Current second: \n" + s, 5, 50);
  push();
  translate(0,0);
  rotate(ScAngle)
  stroke("blue");
  strokeWeight(7)
  line(0,0,100,0)
  pop();
}

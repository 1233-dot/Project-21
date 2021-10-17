
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1050);


	engine = Engine.create();
	world = engine.world;
	ball_options={
		isStatic:false,
		restitution: 0.3,
		friction: 0,
		density:1.2
	}
	//Create the Bodies Here.
	Matter.Bodies.circle(200,10,40,ball_options)
	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120)
	rightSide = new ground(100,600,)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40,40)
  groundObj.show();
  leftSide.show();
  rightSide.show();
  keyPressed();
  Engine.update(engine);
  groundObj.display();
  drawSprites();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	}
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	}
}
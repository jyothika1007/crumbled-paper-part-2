
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(700,580,1400,15);

  paper = new Paper(250,550,50);
  
  dustbin1 = new Dustbin(1100,565,200,20);
	dustbin2 = new Dustbin(1200,460,20,200);
  dustbin3 = new Dustbin(1000,460,20,200);
  
	Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);
  
  ground.display();
  paper.display();
  dustbin2.display();
  dustbin3.display();
  dustbin1.display();
  
  drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-130});
}
}
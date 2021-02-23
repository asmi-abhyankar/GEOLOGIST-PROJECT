
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var rubber ;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer=new Hammer(400,400,150,10)
	stone=new Stone(200,650,100,100)
	rubber=new Rubber(550,650,50,50)

	ground=new Ground(400,690,800,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("pink");
  
  hammer.display() 
  stone.display()
  rubber.display()
  ground.display();
  

   drawSprites();
 
}
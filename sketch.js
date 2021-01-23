const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof1
var bob1, bob2, bob3, bob4, bob5
var rope1, rope2, rope3, rope4, rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
	roof1 = new roof(400,100,750,30)  
	
	bob1 = new bob(100,100,15)
	bob2 = new bob(130,100,15)
	bob3 = new bob(160,100,15)
	bob4 = new bob(190,100,15)
	bob5 = new bob(220,100,15)

	rope1 = new rope(roof1.body, bob1.body)
	rope2 = new rope(roof1.body, bob2.body)
	rope3 = new rope(roof1.body, bob3.body)
	rope4 = new rope(roof1.body, bob4.body)
	rope5 = new rope(roof1.body, bob5.body)


	Engine.run(myengine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(myengine)

  
  roof1.display()

  bob1.display()
  bob2.display()
  bob4.display()
  bob3.display()
  bob5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  

  drawSprites();
 
}




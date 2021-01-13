
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var elastic;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(600,508,400,400);
	ground = new Ground(400,695,800,10);
	stone = new Stone(100,600,50,50);
	boy = new Boy(150,635,170,220);

	mango1 = new Mango(450,480,50,70);
	mango2 = new Mango(450,430,50,70);
	mango3 = new Mango(520,450,50,70);
	mango4 = new Mango(580,480,50,70);
	mango5 = new Mango(670,480,50,70);
	mango6 = new Mango(750,480,50,70);
	mango7 = new Mango(600,400,50,70);
	mango8 = new Mango(720,430,50,70);
	mango9 = new Mango(650,360,50,70);
	mango10 = new Mango(540,360,50,70);

	elastic = new Elastic(stone.body,{x:100,y:590});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  tree.display();
  ground.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  elastic.display();
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	elastic.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<= lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		}
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:100,y:590})
		elastic.attach(stone.body);
	}
}




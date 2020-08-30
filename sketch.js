
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var player,playerImg;
var ground,tree;
var mango1,mango2,mango3,mango,mango5;

function preload()
{
	playerImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	player = createSprite(200,650,0.1,0.1);
	player.scale = 0.05;
	player.addImage(playerImg);

	ground = new Ground(600,690,1200,10);
	stone = new Stone(100,590,100);
	tree = new Tree(750,500,500,1000);
	mango1 = new Mango(700,200,30);
	mango2 = new Mango(650,220,30);
	mango3 = new Mango(670,280,30);
	mango4 = new Mango(750,100,30);
	mango5 = new Mango(200,400,30);
	chain = new SlingShot(stone.body,{x:180,y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  detectCollision(stone,mango5)

  ground.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chain.display();
  drawSprites();
 
}

function detectCollision(obj1,obj2){
	mangoBodyPosition = obj1.body.position;
	stoneBodyPosition = obj2.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=(obj1.dist+obj2.dist)+100){
		Matter.Body.setStatic(obj2.Body.false);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    chain.fly();
}





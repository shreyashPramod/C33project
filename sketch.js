const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var particles = [];
var plinkos = [];

var divisions=[];
var divisionHeight=300;

var score=0;

function setup() {
	createCanvas(480,750);
	engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(250,740,500,10);
  ground2 = new Ground(1,365,10,730);
  ground3 = new Ground(480,365,10,730);

 for (var k = 0; k <=width; k = k + 80)
  {
    divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 35; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175));
  }

   for (var j = 35; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275));
  }

   for (var j = 20; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375));
  }

	Engine.run(engine);
}

function draw() {
  background("black");

  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  ground1.display();
  ground2.display();
  ground3.display();

 for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

  for (var j = 0; j < particles.length; j++) {
   
   particles[j].display();
  }
   drawSprites();
}

function mousePressed()
{
   if(gameState!=="end")
   {
     count++;
     particles=new Particle(mouseX,10,10,10,)
   }
}

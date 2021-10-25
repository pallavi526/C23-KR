


//Create namespace for Engine
const Engine=Matter.Engine
//Create namespace for World
const World=Matter.World
//Create namespace for Bodies
const Bodies=Matter.Bodies
//Create namespace for Body
const Body =Matter.Body

var engine,world
function setup() {
  createCanvas(400,400);
//create the engine
engine=Engine.create()
  //Add world to the engine
  world=engine.world

  var ball_options={
    restitution:0.9
  }
  ball=Bodies.circle(100,100,40,ball_options)
  World.add(world,ball)

  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,380,400,10,ground_options)
  World.add(world,ground)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill("pink")
  ellipse(ball.position.x,ball.position.y,40);
  
  rect(ground.position.x,ground.position.y,400,10)
  
  
}


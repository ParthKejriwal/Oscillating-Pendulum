const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;

var ball,platform,chain;



function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  platform = new Ground(400, 100, 150, 25);
    ball=new Ground (400,200,50,50);
    chain= new Chain(ball.body,platform.body);
   
}



function draw() {
  background(10); 
  Engine.update(engine); 
  text("Press Space to oscillate the pendulum with the mouse",200,50);
  text("Press Backspace to stop it from oscillating",200,70)
 
 ball.display();
 platform.display();
 chain.display();
 drawSprites();
}

/*function keyPressed(){
    if(keyCode===32) {
       ball.position.x=mouseX;
       ball.position.y=mouseY;
    }
}*/

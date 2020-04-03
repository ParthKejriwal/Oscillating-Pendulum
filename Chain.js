class Chain  {
    constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:30
    }
    this.chain=Constraint.create(options);
    World.add(world,this.chain);
    }


  display() {
      var pointA=this.chain.bodyA.position;
      var pointB=this.chain.bodyB.position;
      strokeWeight(4);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
      if (keyCode===32) {
          pointA.x=mouseX;
          pointA.y=mouseY;
      }
      if (keyCode===8) {
          pointA.x=400;
          pointA.y=200;
      }
  }
  };
  
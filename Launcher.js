class Launcher{

 constructor(body1,pointB){

    var options = {

        bodyA : body1,
        pointB : pointB,
        stiffness : 0.01,
        length : 50
    }

  this.pointB = pointB;
  
  this.launcher = Constraint.create(options);
  World.add(world, this.launcher);
 
 }
 fly(){

    this.launcher.bodyA = null

 }
 attach(body){
    this.launcher.bodyA = body
 }
display(){

if(this.launcher.bodyA){

    var pointA = this.launcher.bodyA.position;
    var pointB = this.pointB;
     
    fill("red")
    stroke(86,39,15);
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
} 

  
}


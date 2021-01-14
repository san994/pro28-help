class Mango{
    constructor(x, y ) {

        var options = {
            
            isStatic : true,
            friction : 1,
            restitution:1


        }

        this.body = Bodies.circle(x, y, 60, options);
        
        this.image = loadImage("mango.png");

        World.add(world, this.body);

      }
      display(){
        
        var pos = this.body.position

        imageMode(CENTER);
        image(this.image, pos.x,pos.y, 60,60);
        
      }
}
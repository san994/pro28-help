class Stone{
    constructor(x, y) {
        var options = {
            
            isStatic : false,
            dencity : 1.2,
            friction : 1,
            restitution : 0

        }

        this.body = Bodies.circle(x, y, 55, options);
        
        this.image = loadImage("stone.png");

        World.add(world, this.body);
      
      }
      display(){
        
       var pos = this.body.position

       

        ellipseMode(CENTER)
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,55,55);
        
      }
}
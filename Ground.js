class Ground{
    constructor(x, y,width,height ) {
        var options = {
            
            isStatic : true

        }

        this.body = Bodies.rectangle(x, y,this.width,this.height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

      }
      display(){
        
        var pos = this.body.position;

        fill("grey");
        rect(CENTER);
        rect( pos.x,pos.y,this.width, this.height);
        
      }
}
class Tree{
    constructor(x, y, width,height ) {
        var options = {
            
            static : true

        }

        this.body = Bodies.rectangle(x, y, this.width,this.height, options);
        this.width = width
        this.height = height
        
        this.image = loadImage("tree.png");

        World.add(world, this.body);

      }
      display(){
        
        var pos = this.body.position

        rectMode(CENTER)
        imageMode(CENTER);
        image(this.image,700,300,this.width,this.height);
        
      }
}
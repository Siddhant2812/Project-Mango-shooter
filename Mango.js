class Mango {
    constructor(x, y,diameter) {
      var options = {
          restitution:0,
          friction:1,
          isStatic: true
      }
      this.diameter = diameter;
      this.x = x;
      this.y = y;
      this.image = loadImage("Plucking mangoes/mango.png");
      this.body = Bodies.circle(x,y,(this.diameter)/2,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      strokeWeight(4);
      image(this.image,0, 0, this.diameter,this.diameter);
      pop();
    }
  };
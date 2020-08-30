class Stone {
    constructor(x, y,diameter) {
      var options = {
          restitution:0,
          friction:1,
          isStatic: false
      }
      
      this.diameter = diameter;
      this.x = x;
      this.y = y;
      this.image = loadImage("Plucking mangoes/stone.png");
      this.body = Bodies.circle(x,y,(this.diameter)/2,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      strokeWeight(4);
      image(this.image,0, 0, 25,25);
      pop();
    }
  };
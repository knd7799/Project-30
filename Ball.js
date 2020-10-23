class ball {
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Hexagon Image.jpeg");
    World.add(world, this.body);
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("gold");
    imageMode(CENTER)
    image(polygon_img,ball.position.y,40,40);
    
  }
}  
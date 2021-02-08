class Paper{
    constructor(x,y,radius) {
        var options = {
            'isStatic' : false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
}
this.x=x;
this.y=y;
  this.radius=radius;
  this.body = Bodies.circle(x,y,this.radius/2,options);
  this.image=loadImage("sprite/paper.png");

World.add(world, this.body);
}

display(){
    var pos =this.body.position;

    ellipseMode(CENTER);
    imageMode(CENTER);
    image(this.image,pos.x, pos.y, 70,70);
    //ellipse(pos.x,pos.y,this.radius,this.radius);
}
}
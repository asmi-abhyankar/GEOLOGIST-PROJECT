
class Hammer{
    constructor(x,y){
        var Option={
            restitution:0.8,
            friction:1.0,
            density:1.0
                  }
          this.body=Bodies.rectangle(x,y,150,50,Option);
          World.add(world,this.body);
          this.width=150;
          this.height=50;
    }
    display(){
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push() ;
        translate(pos.x,pos.y)
        strokeWeight(4);
        stroke("white");
        fill("yellow");
        rectMode(CENTER);
        rect (0,0,this.width,this.height);
        pop();
    }
}
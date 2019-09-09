class Point {
    constructor(position,radius,colour,label){
    this.position = position;
    this.radius = radius;
    this.colour = colour;
    this.label = label || "";
    }


    draw(context){
    context.beginPath();
    context.strokeStyle = this.colour;
    context.fillStyle = this.colour;
    context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    context.font = "30px Comic Sans";
    context.fillText(this.label, this.position.dx-20,this.position.dy-this.radius);
    }
}
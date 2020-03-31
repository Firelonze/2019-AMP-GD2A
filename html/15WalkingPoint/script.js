const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,300),20,"lime","A",true);
let B = new Point(new Vector2d(500,400),20,"blue","B",true);
let Bcheck = true;


let point = new DPoint(new Vector2d(200,300),new Vector2d(0,0),new Vector2d(0,0),10,"crimson", "", false)

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    drawLineAB();
    A.draw(context);
    B.draw(context);
    point.draw(context);
    if (Bcheck){
        point.vel.differenceVector(B.position,point.pos);
        point.vel.scalMul(0.01);
    }
    if (!Bcheck){
        point.vel.differenceVector(A.position,point.pos);
        point.vel.scalMul(0.01);
        }
}





animate();


function drawLineAB(){
    context.beginPath();
    context.strokeStyle= "black";
    context.moveTo(A.position.dx,A.position.dy);
    context.lineTo(B.position.dx,B.position.dy);
    context.closePath();
    context.stroke();
    point.update();      
    if (point.vel.magnitude <= 0.2){
        console.log(Bcheck);
        Bcheck = !Bcheck;
    }
    point.vel.draw(context,point.pos,20,"red");
}




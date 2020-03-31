const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(750,750),20,"black", "A",true);
let B = new Point(new Vector2d(250,250),20,"black", "B",true);
let C = new Point(new Vector2d(250,750),30,"red","C",true);
//let dot = new Dot(A,B);
let l = new LinearFunction(1,1);



function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    A.draw(context);
    B.draw(context);
    C.draw(context);
    l.defineLineWithTwoPoints(A,B);
    l.draw(context);
}





animate();

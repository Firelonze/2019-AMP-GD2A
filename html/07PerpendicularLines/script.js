const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();

let A = new Point(new Vector2d(200,200),15,"White","A", true);
let B = new Point(new Vector2d(800,600),15,"Blue","B",true);
let l = new LinearFunction(1,1);
let C = new Point(new Vector2d(400,600),15,"Yellow","C",true);
let m = new LinearFunction(1,1);
let S = new Point(new Vector2d(width/2,height/2),10,"Pink","S",false);

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    grid.draw(context);
    l.defineLineWithTwoPoints(A,B);
    l.draw(context);
    m.slope = -1/l.slope;
    m.intercept = C.position.dy - m.slope * C.position.dx;
    m.draw(context);
    A.draw(context);
    B.draw(context);
    C.draw(context);
    S.position.dx = l.intersection(m).x;
    S.position.dy = l.intersection(m).y;
    S.draw(context);

}
animate(animate);

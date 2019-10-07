const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();

let A = new Point(new Vector2d(750,750),20,"White","A",true);
let B = new Point(new Vector2d(100,100),20,"Pink","B",true);
let C = new Point(new Vector2d(250,250),20,"Yellow","C",true);
let AC = new Point(new Vector2d(0,0),15,"Lime","AC",false);
let BC = new Point(new Vector2d(0,0),15,"Red","BC",false);
let AB = new Point(new Vector2d(0,0),15,"Blue","AB",false);
let S = new Point(new Vector2d(0,0),10,"Gold","S",false); 

let l = new LinearFunction(0,0);
let m = new LinearFunction(0,0);
let n = new LinearFunction(0,0);
let o = new LinearFunction(0,0);
let p = new LinearFunction(0,0);
let q = new LinearFunction(0,0);

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    grid.draw(context);
    l.defineLineWithTwoPoints(A,B);
    l.draw(context);
    m.defineLineWithTwoPoints(B,C);
    m.draw(context);
    n.defineLineWithTwoPoints(C,A);
    n.draw(context);
    A.draw(context);
    B.draw(context);
    C.draw(context);
    AC.draw(context);
    BC.draw(context);
    AB.draw(context);

    o.slope = -1/n.slope;
    o.intercept = B.position.dy - o.slope * B.position.dx;
    p.slope = -1/m.slope;
    p.intercept = A.position.dy - p.slope * A.position.dx;
    q.slope = -1/l.slope;
    q.intercept = C.position.dy - q.slope * C.position.dx;

    p.draw(context);
    o.draw(context);
    q.draw(context);
    
    AC.position.dx = p.intersection(m).x;
    AC.position.dy = p.intersection(m).y;

    BC.position.dx = o.intersection(n).x;
    BC.position.dy = o.intersection(n).y;

    AB.position.dx = q.intersection(l).x;
    AB.position.dy = q.intersection(l).y;

    S.position.dx = o.intersection(p).x;
    S.position.dy = o.intersection(p).y;
    S.draw(context);
}

animate();
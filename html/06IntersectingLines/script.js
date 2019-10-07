const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();

let A = new Point(new Vector2d(750,750),20,"white","A",true);
let B = new Point(new Vector2d(100,100),20,"Pink","B",true);
let C = new Point(new Vector2d(250,250),20,"Yellow","C",true);
let D = new Point(new Vector2d(500,700),20,"Blue","D",true);
let S = new Point(new Vector2d(width/2,height/2),10,"Lime","S",false);
let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);



function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    grid.draw(context);
    l.defineLineWithTwoPoints(A,B);
    l.draw(context);
    
    m.defineLineWithTwoPoints(C,D);
    m.draw(context);

    
    
    A.draw(context);
    B.draw(context);
    C.draw(context);
    D.draw(context);
    S.draw(context);

    S.position.dx = l.intersection(m).x;
    S.position.dy = l.intersection(m).y;
}

animate();
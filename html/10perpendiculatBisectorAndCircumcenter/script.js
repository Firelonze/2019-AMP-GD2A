const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();

let A = new Point(new Vector2d(200, 200), 20, "black", "A", true);
let B = new Point(new Vector2d(400, 300), 20, "white", "B", true);
let C = new Point(new Vector2d(200, 300), 20, "gray", "C", true);

let S = new Point(new Vector2d(0, 0),10, "gold", "X", false);

let D = new Point(new Vector2d(0, 0),15, "red", "AB", false);
let E = new Point(new Vector2d(0, 0),15, "green", "BC", false);
let F = new Point(new Vector2d(0, 0),15, "blue", "AC", false);

let L1 = new LinearFunction(0, 0);
let L2 = new LinearFunction(0, 0);
let L3 = new LinearFunction(0, 0);

let L4 = new LinearFunction(0, 0,);
let L5 = new LinearFunction(0, 0,);
let L6 = new LinearFunction(0, 0,);

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, width, height);
    grid.draw(context);

    let rAX = S.position.dx - A.position.dx;
    let rAY = S.position.dy - A.position.dy;
    let radius = Math.sqrt(rAX * rAX + rAY * rAY);

    L1.defineLineWithTwoPoints(A, B);
    L2.defineLineWithTwoPoints(B, C);
    L3.defineLineWithTwoPoints(C, A);
    
    L4.slope = -1 / L3.slope;
    L4.intercept = F.position.dy - L4.slope * F.position.dx;

    L5.slope = -1 / L1.slope;
    L5.intercept = D.position.dy - L5.slope * D.position.dx;

    L6.slope = -1 / L2.slope;
    L6.intercept = E.position.dy - L6.slope * E.position.dx;

    L1.getTheMedian(A, B, D);
    L2.getTheMedian(B, C, E);
    L3.getTheMedian(C, A, F);

    S.position.dx = L6.intersection(L4).x;
    S.position.dy = L6.intersection(L4).y;
    
    context.beginPath();
    context.arc(S.position.dx, S.position.dy, radius, 0, 2 * Math.PI);
    context.stroke();

    A.draw(context), B.draw(context), C.draw(context), D.draw(context), F.draw(context), E.draw(context), S.draw(context);
    L1.draw(context), L2.draw(context), L3.draw(context), L4.draw(context), L5.draw(context), L6.draw(context);
}

animate();

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(750,750),20,"Red","A", true);
let B = new Point(new Vector2d(250,250),20,"Blue","B",true);
let C = new Point(new Vector2d(500,500),20,"Green","C",true);

//let l = new LinearFuntion(1,1);

let vector = new Vector2d(1,1);
let rad = new Vector2d(1,1);
let tan = new Vector2d(1,1);

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
  
    A.draw(context);
    B.draw(context);
    C.draw(context);
    vector.dx = B.position.dx - A.position.dx;
    vector.dy = B.position.dy - A.position.dy;
  
    tan.dx = C.position.dx - A.position.dx;
    tan.dy = C.position.dy - A.position.dy;

    //rad.dx = -tan.dy;
    //rad.dy = -tan.dx;
  
    
    vector.draw(context,A.position,1, "Green");
    tan.draw(context,A.position,1, "Red");
    rad.draw(context,A.position,1,"Yellow")
  }

animate();

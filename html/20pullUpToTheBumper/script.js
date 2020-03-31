const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let myBall = new Point(new Vector2d(100,100),50,"purple","Label");


function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
  
    A.draw(context);
    B.draw(context);
    C.draw(context);
    vector.dx = B.position.dx - A.position.dx;
    vector.dy = B.position.dy - A.position.dy;
  
    rad.dx = C.position.dx - A.position.dx;
    rad.dy = C.position.dy - A.position.dy;
  
    vector.draw(context,A.position,1, "Green");
    rad.draw(context,A.position,1, "Red");
  }

animate();

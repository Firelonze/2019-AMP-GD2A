const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let bumpperArray = FillBumperArray();
let ball = new DPoint(new Vector2d(100,100),new Vector2d(3,4),new Vector2d(0,0),10,"Yellow","");
ball.rad = new Vector2d(1,1);
ball.tan = new Vector2d(1,1);


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  ball.update();
  ball.draw(context);

  bumpperArray.map((bump) => {
    let distanceVector = new Vector2d(1,1);
    distanceVector.differenceVector(bump.position, ball.pos);
    //distanceVector.draw(context,ball.pos,1,"green");
    bump.draw(context);
    if(distanceVector.magnitude < ball.radius + bump.radius){
      bump.color = "pink";
      
      ball.rad.dx = distanceVector.dx;
      ball.rad.dy = distanceVector.dy;
      
      ball.tan.dx = -ball.rad.dy;
      ball.tan.dy = ball.rad.dx;

      ball.rad.magnitude = 1;
      ball.tan.magnitude = 1;

      ball.rad.magnitude = ball.rad.dot(ball.vel);
      ball.tan.magnitude = ball.tan.dot(ball.vel);

      // ball.rad.draw(context,ball.pos,20,"white");
      // ball.tan.draw(context,ball.pos,20,"white");
      ball.rad.magnitude = -ball.rad.magnitude;
      ball.vel.sumVector(ball.rad,ball.tan);

    }
    else{
      bump.color = "red";
    }
  })


 // ball.vel.draw(context,ball.pos,100,"lightblue");
}
animate();


function FillBumperArray(){
let array = [];
let startColumnWidth = 50;
let columnWidth = 100;

let startRowHeight = 50;
let rowHeight = 100;
let numberOnRow = Math.floor(width/columnWidth);
let numberOfBumpers = Math.floor(height/rowHeight) * numberOnRow;


for(let i = 0; i < numberOfBumpers; i++)
{
  let x = startColumnWidth + (i % numberOnRow) * columnWidth;
  let y = startRowHeight + (Math.floor(i/numberOnRow))*rowHeight;
  let myBall = new Point(new Vector2d(x,y),25,"purple","i = " + (i + 1));
  array.push(myBall);  
}
return array;
}

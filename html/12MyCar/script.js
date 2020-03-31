const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let rot = 0;

let car = new Image();
car.src = "images/car.png";
car.position = new Vector2d(0,canvas.height - car.height);
car.velocity = new Vector2d(10,0);

let backWheel = new Image();
backWheel.src = "images/wheel.png";
backWheel.position = new Vector2d(0,0);
backWheel.velocity = new Vector2d(3,0);

let frontWheel = new Image();
frontWheel.src = "images/wheel.png";
frontWheel.position = new Vector2d(0,0);
frontWheel.velocity = new Vector2d(3,0);
   
function animate() {
    requestAnimationFrame(animate);
    
    backWheel.velocity = car.velocity;

    frontWheel.position = (car.position, new Vector2d(675,125));
    backWheel.position = (car.position, new Vector2d(135,125));

    context.clearRect(0,0,canvas.width,canvas.height);
    car.position.add(car.velocity);
    context.drawImage(car,car.position.dx,car.position.dy);


    context.save();
    context.translate(car.position.dx+214, car.position.dy+195);
    context.rotate(rot);
    context.drawImage(backWheel,-backWheel.width/2,-backWheel.height/2);
    context.restore();
    
    context.save();
    context.translate(car.position.dx+752, car.position.dy+200);
    context.rotate(rot);
    context.drawImage(frontWheel,-frontWheel.width/2,-frontWheel.height/2);
    context.restore();

    rot += car.velocity.dx/80;
    clamp();
}


animate();

function clamp(){
    if(car.position.dx > width){
        car.position.dx = -car.width;
    }
}
addEventListener('keydown',(evt)=>{
    switch (evt.key) {
      case "ArrowRight":
        car.velocity.dx += 1;
        break;
        case "ArrowLeft":
        car.velocity.dx -=1;
        break;
      default:
    }
  });

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new DPoint(new Vector2d(200,200),new Vector2d(3,4), new Vector2d(0,0.1),20 ,"lime","Ball");

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    point.draw(context);
    point.update();
    point.vel.draw(context,point.pos,5);

}


animate();


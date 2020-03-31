const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

points = [];

for (let i = 0; i < 10; i++) {
    let point = new DPoint(new Vector2d(getRandom(200),getRandom(450)),new Vector2d(getRandom(5),getRandom(5)), new Vector2d(0,0.1),20 ,"lime","Ball");
    points.push(point);
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    for (let i = 0; i < points.length; i++) {
        points[i].draw(context);
        points[i].update();
        points[i].vel.draw(context,points[i].pos,5);
    }
}

function getRandom(max){
    let ans = Math.floor(Math.random()*max);
    return ans;
}
animate();


const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let waypoints = [];
let index = 0;
let point = new DPoint(new Vector2d(getRandom(200),getRandom(450)),new Vector2d(getRandom(5),getRandom(5)), new Vector2d(0,0.1),20 ,"lime","Ball");

for (let i = 0; i < 10; i++) {
    let waypointLocation = new Point(new Vector2d(getRandom(canvas.width),getRandom(canvas.height)),20,"pink","",true);
    waypoints.push(waypointLocation);
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    point.draw(context);
    for (let i = 0; i < waypoints.length; i++) {
        waypoints[i].draw(context);       
        point.vel.differenceVector(waypoints[index].position,point.pos);
        point.vel.scalMul(0.01);
        point.update();
    }
    if (point.vel.magnitude <= 0.3){
        index++;
    }
    if (waypoints.length < index){
        index = 0;
    }
}

animate();

function getRandom(max){
    let ans = Math.floor(Math.random()*max);
    return ans;
}
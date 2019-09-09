const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];



function animate() {
    requestAnimationFrame(animate);
    let colour = "rgba(" + getRandom(255) + "," + getRandom(255) + "," + getRandom(255) + ","+ "0.2" +")"
    let A = new Point(new Vector2d(getRandom(width), getRandom(height)), getRandom(200), colour,"plant");
    points.push(A);
    for(let i = 0; i<points.length; i++){
        points[i].label = i;
        points[i].radius++;
        points[i].draw(context);
        if (points[i].radius >= 200){
            points.splice(i,1);
        }
    }
}

animate();

function getRandom(max){
    let ans = Math.floor(Math.random()*max);
    return ans;
}
class LinearFunction{
    constructor(slope,intecept){
        this.slope = slope;
        this.intercept = intecept;
    }

    y(x){
        return x * this.slope + this.intercept;
    }

    defineLineWithTwoPoints(A,B){
        this.slope = (B.position.dy-A.position.dy)/(B.position.dx-A.position.dx);
        this.intercept = A.position.dy - A.position.dx * this.slope;
    }
    
    intersection(m){
        let ans = {};
        ans.x = (m.intercept-this.intercept) / (this.slope-m.slope);
        ans.y = this.y(ans.x);
        return ans;
    }

    draw(context){
        context.beginPath();
        context.moveTo(0,this.y(0));
        context.lineTo(width,this.y(width));
        context.closePath();
        context.stroke();
    }

    getTheMedian(A,B,C){
        C.position.dx = this.medianX;
        C.position.dy = this.medianY;
        this.medianX = (A.position.dx + B.position.dx)/2;
        this.medianY = (A.position.dy + B.position.dy)/2;
    }
}
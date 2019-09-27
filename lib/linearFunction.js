class LinearFunction{
    constructor(slope,intesept){
        this.slope = slope;
        this.intersept = intesept;
    }

    y(x){
        return x * this.slope + this.intersept;
    }

    defineLineWithTwoPoints(A,B){
        this.slope = (B.position.dy-A.position.dy)/(B.position.dx-A.position.dx);
        this.intersept = A.position.dy - A.position.dx * this.slope;
        console.log(this.slope, this.intersept);
    }
}
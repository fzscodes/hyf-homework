class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return this.radius * 2;
    }
    getCircumference() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }
    getArea() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    }
}

const circle1 = new Circle(10);
console.log(circle1.getDiameter());
console.log(circle1.getCircumference());
console.log(circle1.getArea());

const circle2 = new Circle(15);
console.log(circle2.getDiameter());
console.log(circle2.getCircumference());
console.log(circle2.getArea());

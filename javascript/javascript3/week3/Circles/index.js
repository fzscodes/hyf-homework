//Paint a circle to a canvas element
const canvas = document.getElementById('myCanvas');

canvas.height = window.innerHeight;//canvas has the same height as screen
canvas.width = window.innerWidth;// canvas has the same width as screen
const context = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 70;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
context.fillStyle = 'green';
context.fill();

//Class creation time!
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x
        this.y = y
        this.r = r
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.fillColor = fillColor
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, this.fillColor);
        context.fillStyle = this.fillColor;
        context.fill();
    }
}
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, '#000000');
const c2 = new Circle(100, 100, 40, 0, 2 * Math.PI, "red");
const c3 = new Circle(20, 20, 10, 0, 2 * Math.PI, 'purple');
c1.draw();
c2.draw();
c3.draw();

//Now lets make art!
setInterval(() => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const maxRadius = 20;
    const minRadius = 3;

    x = Math.random() * canvas.width;
    y = Math.random() * canvas.height;
    r = minRadius + (Math.random() * (maxRadius - minRadius));
    startAngle = 0;
    endAngle = 2 * Math.PI
    fillColor = `rgb( ${red}, ${green}, ${blue})`
    const c4 = new Circle(x, y, r, startAngle, endAngle, fillColor);
    c4.draw()
}, 100);

import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10,15);
let myCircle = new Circle(5,10,15);
let myRectangle = new Rectangle(0,0,15,20);

// Declare an array of shapes ... intially empty

let theShapes : Shape[] = [];

// Add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
}
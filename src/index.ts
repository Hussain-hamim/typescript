import { Circle, Square } from "./shapes";
import Store, { Format } from "./storage";
import * as Shapes from "./shapes"; // wild card import

let circ = new Shapes.Circle(1);
console.log(circ);

let circle = new Circle(4);
let square = new Square(4);
console.log(circle);
console.log(square);
console.log(Store);
console.log(Format);

// Prototype:

let human = {
  teeth: 32,
};

let gwen = {
  // we added this line:
  __proto__: human,
  age: 19,
};

// console.log(gwen.age);
console.log(human.age);
console.log(gwen.age);

console.log(human.teeth);
console.log(gwen.teeth);

console.log(human.tail);
console.log(gwen.tail);

// any javaScript may choose other object as prototype

////// The prototype Chain:
let mammal = {
  brainy: true,
};

let person = {
  __proto__: mammal,
  teeth: 32,
};
let hussain = {
  __proto__: person,
  age: 22,
};
console.log(hussain.brainy);
console.log(hussain.teeth);

/**
 * js will search for property on our object then on it's prototype
 * then on that object's prototype and so on...
 */

// Shadowing:

let human2 = {
  teeth: 32,
};

let gwen2 = {
  __proto__: human2,
  teeth: 31,
};

let hussain2 = {
  __proto__: gwen2,
  //   teeth: 30,
  age: 22,
};

console.log(human2.teeth);
console.log(gwen2.teeth);
console.log(hussain2.teeth);

// hasOwnProperty: built-in js function for checking if property has it's own property wire
console.log(gwen2.hasOwnProperty("teeth"));
console.log(hussain2.hasOwnProperty("teeth"));

// assignment:
let human3 = {
  teeth: 32,
};

let gwen3 = {
  __proto__: human3,
  // note: no own teeth property
};

gwen3.teeth = 31;

console.log(human3.teeth);
console.log(gwen3.teeth);

console.log(human3.hasOwnProperty);
console.log(human3.toString);

// an object with no prototype:
let weirdo = {
  __proto__: null,
};

// this object doesn't even have it's built-in object method anymore
console.log(weirdo.hasOwnProperty);
console.log(weirdo.toString);

// polluting the prototype:
let obj = {};
// now all objects prototype have this property smell
obj.__proto__.smell = "banana";

console.log(hussain.smell);
console.log(gwen.smell);
console.log(human.smell);

///// Fun Fact: __proto__ vs. prototype =>

function Donut() {
  return { shape: "round" };
}
// let donut = Donut();

// now i have prototype with some shared method
let donutProto = {
  eat() {
    console.log("Nom nom nom");
  },
};
//// its gross to manually add __proto__
let donut1 = Donut();
donut1.__proto__ = donutProto;

let donut2 = Donut();
donut2.__proto__ = donutProto;

donut1.eat();
donut2.eat();

//// as a shortcut adding .prototype on the function itself and
//// adding new keyword before function calling would do it[attach the __proto__]

Donut.prototype = {
  eat() {
    console.log("heh heh heh");
  },
};

let donut3 = new Donut();
let donut4 = new Donut();

donut3.eat();
donut4.eat();

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

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

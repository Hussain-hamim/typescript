// // show the concept of an unintentionally missing value

// let bandersnatch;
// console.log(bandersnatch);

// // null: used for intentionally missing value.
// let mimsy = null;
// console.log(mimsy);

// console.log(typeof null);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// console.log(Number.MAX_SAFE_INTEGER + 1);
// console.log(Number.MAX_SAFE_INTEGER + 2);
// console.log(Number.MAX_SAFE_INTEGER + 3);
// console.log(Number.MAX_SAFE_INTEGER + 4);
// console.log(Number.MAX_SAFE_INTEGER + 5);

// console.log(0.0 + 0.2 === 0.30000000000000004);

// console.log(1 / (-1 / 0));

// console.log(typeof (0 / 0));

// console.log(typeof NaN);

// console.log(typeof "こんにちは"); // "string"
// console.log(typeof "こんにちは"); // "string"
// console.log(typeof `こんにちは`); // "string"

// let cat = "Cheshire";

// console.log(cat.length);
// console.log(cat[0]);
// console.log(cat[1]);

// let answer = prompt("enter your name");
// console.log(answer);

// let alo = Symbol();
// console.log(typeof alo);

// let junk = {};
// junk = null;

// console.log(junk);

// for (let i = 0; i < 7; i++) {
//   console.log(function () {});
// }

// let count = function () {
//   return 7;
// };
// let c = count;
// console.log(c);

// let a = "1";
// let b = 1;

// console.log(a === b);
// console.log(a === b);
// console.log(Object.is(a, b));

// const c = { a: "Hello" };

// console.log(Object.is(c, c));
// console.log(c == c);

// let dwarves = 7;
// let continents = "7";
// let worldWonders = 3 + 4;

// console.log(Object.is(dwarves, worldWonders));
// // console.log(dwarves === continents);

// let banana = { a: "Hussain" };
// let cherry = banana;
// let chocolate = cherry;
// cherry = { b: "Hamim" };

// console.log(Object.is(banana, cherry)); // false
// console.log(Object.is(cherry, chocolate)); // false
// console.log(Object.is(chocolate, banana)); // true

// console.log(chocolate.a);
// console.log(cherry.b);

// Equality in js:
// Strict Equality: a === b (triple equals).
// Loose Equality: a == b (double equals).
// Same Value Equality: Object.is(a, b) .

// strictly equality:
// console.log(2 === 2);
// console.log({} === {});

// strict value equality vs. same value equality:
// both of them are the same in almost all cases
// some exception:
// console.log(NaN === NaN); // false
// console.log(-0 === 0); // true

// // case 1:
// let width = 0 / 0; // NaN

// let height = width * 2; // NaN

// console.log(width === height); // false
// console.log(Object.is(width, height)); // true

// function resizeImage(size) {
//   if (size !== size) {
//     // This will never get logged: the check is always false!
//     // but there are some solution like:
//     // Number.isNaN(size);
//     // object.is(size, NaN);
//     // size !== size;
//     console.log("Something is wrong.");

//     console.log(size !== size);
//   } else console.log("okey...");
// }

// resizeImage(NaN);

// special case two: -0

let width = 0;
let height = -width;
console.log(width === height); // true

console.log(Object.is(width, height)); //false

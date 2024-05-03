//   js     vs    ts
//number        any
//string        unknown
//boolean       never
//null          enum
//undefined     tuple
//object

// let sale: number = 123_456_789;
// let course: string = "TypeScript";
// let is_published: boolean = true;
// //any
// let level;
// level = 1;
// level = "a";

// function render(document: any) {
//   console.log(document);
// }

// //array
// let numbers: number[] = [1, 2, 3];
// let numbers2 = [1, 2, 3];

// //intellisense
// let numbers3: number[] = [];
// numbers3.forEach((n) => n.toLocaleString);

//tuple in ts: a type of fixed array where each element have a particular type.
let users: [number, string] = [1, "Hussain"];
//you can see the intellisense for every type after the dot
users[0].toFixed;
users[1].charCodeAt;

users.push(1);

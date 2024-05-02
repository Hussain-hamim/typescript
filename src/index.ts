//   js     vs    ts
//number        any
//string        unknown
//boolean       never
//null          enum
//undefined     tuple
//object

let sale: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let level;

//exercise:
let a = 100;
let b = "coffee";
let c = [true, false, false];
let d = { age: 20 };
let e = [3];
let f;
let g = [];

interface Song {
  title: string;
  releaseYear: number;
}

let song: Song = { title: "my song", releaseYear: 2002 };

let prices = [100, 200, 300];
prices[0] = 1100;

function myFunc(a: number, b: number): number {
  return a + b;
}

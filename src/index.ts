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
level = 1;
level = "a";

function render(document: any) {
  console.log(document);
}

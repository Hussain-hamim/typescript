//const small = 1;
// const medium = 2;
// const large = 3;

//enum:
//0, 1, 2
enum Size {
  Small,
  medium,
  large,
}
//1, 2, 3
enum Size2 {
  Small = 1,
  medium,
  large,
}
//S, M, L
enum Size3 {
  Small = "S",
  Medium = "M",
  Large = "L",
}

const mySize: Size2 = Size2.medium;

console.log(mySize);

//to run ts file type "tsc" in command line and then...
//type "node dist/index.js"

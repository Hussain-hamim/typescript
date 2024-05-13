// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function; //=> type assertion
//   // we can't use arrow function, when we redefine
//   // our method we use function declaration. and also THIS in arrow func
//   // refer to lexical environment(define where the arrow func define).
//   descriptor.value = function (...args: any) {
//     // the value property reference the target method
//     console.log("before");
//     original.call(this, "blue sky");
//     original.call(this, ...args);
//     console.log("after");
//   };
// }
// //oil, tomato, potato => call bro
// class Person {
//   @Log
//   say(message: string) {
//     console.log("person say " + message);
//   }

//   @Log
//   tell(message: string) {
//     console.log("hello there " + message);
//   }
// }

// const person = new Person();
// person.tell("Hello");

function greet(this: any, text = "welcome") {
  console.log(`${text} ${this.username}`);
}

greet.call({ username: "Hussain" });
greet.bind({ username: "Hamim" })();
greet.apply({ username: "afghan" }, ["salaam"]);

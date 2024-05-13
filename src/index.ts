function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function; //=> type assertion
  // we can't use arrow function, when we redefine our method we use function declaration.
  descriptor.value = function (...args: any) {
    // the value property reference the target method
    console.log("before");
    original.call(this, "blue sky");
    original.call(this, ...args);
    console.log("after");
  };
}
//oil, tomato, potato => call bro
class Person {
  @Log
  say(message: string) {
    console.log("person say " + message);
  }

  @Log
  tell(message: string) {
    console.log("hello there " + message);
  }
}

const person = new Person();
person.tell("Hello");

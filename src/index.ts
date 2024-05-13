function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  // we can't use arrow function, when we redefine our method we use function declaration.
  descriptor.value = function (...args: any) {
    console.log("before");
    original.call(this, "blue sky");
    original.call(this, ...args);
    console.log("after");
  };
}
//oil, tomato, potato
class Person {
  @Log
  say(message: string) {
    console.log("person say " + message);
  }
}

const person = new Person();
person.say("Hello");

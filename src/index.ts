// decorating accessor/getter and setter:
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get; // not value instead use GET
  // to getter method here we can not give or spread parameters
  descriptor.get = function () {
    const result = original?.call(this);
    //if(original !== null && original !== undefined) original.call(this);

    if (typeof result === "string") return result.toUpperCase();
    return result;
    // return (typeof result === 'string') ? result.toUpperCase() : result;
  };
}
class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
    // return 0;
    // return null;
  }
}
let person = new Person("Hussain", "Hamim");
console.log(person.fullName);

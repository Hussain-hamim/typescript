///// constraints:

// constraints by types
function echo<T extends number | string>(value: T) {
  return value;
}
echo(1);
echo("a");

/// constraints by object
//(generic type parameter)
function echo2<T extends { name: string }>(value: T) {
  return value;
}
echo2({ name: "hussain" });

//// constraints by interface
interface Person {
  name: string;
  age: number;
}
function echo3<T extends Person>(value: T) {
  return value;
}
echo3({ name: "hamim", age: 22 });
// echo3({ name: "hamim" });

/// constraints by class
class Person2 {
  constructor(public name: string) {}
}
class Customer extends Person2 {}
function echo4<T extends Person2>(value: T) {
  return value;
}
echo4({ name: "hamim" });
echo4(new Person2("hamim"));
echo4(new Customer("afghan"));

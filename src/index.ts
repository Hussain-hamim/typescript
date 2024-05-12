///// generic function;
function wrapInArray<T>(value: T) {
  return [value];
}
let numbers = wrapInArray("A");
let numbers2 = wrapInArray(1);

// inside class
class ArrayUtils {
  wrapInArray2<T>(value: T) {
    return [value];
  }
}
let utils = new ArrayUtils();
let numbers3 = utils.wrapInArray2(1);
let numbers4 = utils.wrapInArray2("A");

//make it static
class ArrayUtils2 {
  static wrapArray<T>(value: T) {
    return [value];
  }
}
let numbers5 = ArrayUtils2.wrapArray(1);
let numbers6 = ArrayUtils2.wrapArray("B");

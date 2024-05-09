function createUserManager() {
  let user = null;

  return function (name: string) {
    // "use strict";
    user = { name, createdAt: Date.now() };
    return user;
  };
}

const createUser = createUserManager();

let one = createUser("Hussain") === createUser("Hussain");
let two = createUser("Hussain");
// console.log(one);

let obj = {};

console.log(obj === obj);

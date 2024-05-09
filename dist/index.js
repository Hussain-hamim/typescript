"use strict";
function createUserManager() {
    let user = null;
    return function (name) {
        user = { name, createdAt: Date.now() };
        return user;
    };
}
const createUser = createUserManager();
let one = createUser("Hussain") === createUser("Hussain");
let two = createUser("Hussain");
let obj = {};
console.log(obj === obj);
//# sourceMappingURL=index.js.map
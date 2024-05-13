"use strict";
function greet(text = "welcome") {
    console.log(`${text} ${this.username}`);
}
greet.call({ username: "Hussain" });
greet.bind({ username: "Hamim" })();
greet.apply({ username: "afghan" }, ["salaam"]);
//# sourceMappingURL=index.js.map
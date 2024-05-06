"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, "Hussain", 0);
account.deposit(100);
console.log(account.getBalance());
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map
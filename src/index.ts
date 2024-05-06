// classes in Typescript:
class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string; //this is optional

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    //Access Modifiers:
    // 1. public
    // 2. private
    // 3. protected

    // record a transaction
    this._balance += amount;
  }

  private calculateTax() {
    console.log("...");
  }

  getBalance(): number {
    return this._balance;
  }
}
//deposit mean put mean in bank account and withdraw mean take out money from bank
//object:
let account = new Account(1, "Hussain", 0);
account.deposit(100);
// console.log(account.balance); //can not access private properties
// account.id = 0; //read only can not be assign
// account.balance = -1;  ////can not access private properties

//access the private property:
console.log(account.getBalance());

// account.calculateTax(); //can not access the private method here.

console.log(account);
console.log(typeof account);
console.log(account instanceof Account);

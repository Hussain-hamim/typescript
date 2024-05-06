// classes in Typescript:
class Account {
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string; //this is optional

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}
//deposit mean put mean in bank account and withdraw mean take out money from bank
//object:
let account = new Account(1, "Hussain", 0);
account.deposit(100);
console.log(account.balance);
// account.id = 0; //read only can not be assign

console.log(account);
console.log(typeof account);
console.log(account instanceof Account);

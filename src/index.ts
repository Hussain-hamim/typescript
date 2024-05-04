type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id == 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
//we check or...
if (customer !== null) console.log(customer.birthday);
//we use optional chaining.

//(?.): 1. optional property access operator
console.log(customer?.birthday);

let customer2 = getCustomer(1);
console.log(customer2?.birthday?.getFullYear());

// 2. optional element access operator: we this in array
//customer?.[0]

// 3. optional call
let log: any = null;
log?.("a");

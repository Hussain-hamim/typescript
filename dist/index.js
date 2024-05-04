"use strict";
var _a;
function getCustomer(id) {
    return id == 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null)
    console.log(customer.birthday);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let customer2 = getCustomer(1);
console.log((_a = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map
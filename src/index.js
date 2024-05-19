// Chapter 8: properties:

let sherlock = {
  surname: "Holmes",
  address: { city: "London" },
};

let john = {
  surname: "Watson",
  address: sherlock.address,
};

john.surname = "Lennon";
john.address.city = "Malibu";

console.log(sherlock.surname);
console.log(sherlock.address.city);

console.log(john.surname);
console.log(john.address.city);

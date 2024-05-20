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
sherlock.address.city = "Khost";
john.address.city = "Malibu";

console.log(sherlock.surname);
console.log(sherlock.address.city);

console.log(john.surname);
console.log(john.address.city);

// let me = { surname: "Hussain", age: 22 };
// let name = prompt("what is your name?");
// alert(me[name]);

console.log(john.address.city === sherlock.address.city);
/// The rules say that null or undefined on the le side is an error.
console.log(sherlock.boat.name);

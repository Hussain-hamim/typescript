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

// Recap:
//  Properties are wires—a bit like variables. They both point to values. Unlike
//  variables, properties start from objects in our universe.
//  Properties belong to particular objects. You can’t have more than one
//  property with the same name on an object.
//  Generally, you can perform an assignment in three steps:

//  Figure out which wire is on the le .
//  Figure out which value is on the right.
//  Point that wire to that value.
//  An expression like
// obj.property is calculated in three steps:
// Figure out which value is on the le .

//  If it’s null or undefined , throw an error.
//  If that property exists, the result is the value it points to. If that property
//  doesn’t exist, the result is undefined .

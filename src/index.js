/////////// Mutation:

let sherlock = {
  surname: "Holmes",
  address: { city: "London" },
  age: 22,
};
// sherlock.address.city = "Khost";

let john = {
  surname: "Watson",
  address: sherlock.address,
  age: sherlock.age,
};

// john.surname = "Lennon";
// john.address.city = "Malibu";
// john.age = 33;

// possible solution: mutating another object
john.surname = "Lennon";
john.address = { city: "Malibu" };

// alternative solution: no object mutation
john = {
  surname: "Lennon",
  address: { city: "Malibu" },
};

console.log(sherlock.surname);
console.log(sherlock.address.city);
console.log(sherlock.age);

console.log("***********");

console.log(john.surname);
console.log(john.address.city);
console.log(john.age);

// Objects might appear “nested” in code, but in our universe,
//each object is completely separate. An object cannot be “inside”
// of another object!

/**  Remember: a property always points to a value! It can’t
 * point to another property or a variable. In general,
 *  all wires in our universe point to values. */

/**
   *  Your diagram should now look like this:
   John’s surname property now points at the
   "Lennon" string value.
   More interestingly, the object that both 
  address properties are
   pointing to has changed. Its 
  city property now points to the
   "Malibu" string value.
   In a strange case of location hijacking, both Sherlock and John have
   ended up in Malibu. Follow the wires using the diagram and verify this:
   */

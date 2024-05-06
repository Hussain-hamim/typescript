// class person {};
// person.name = "a"; // dynamically add values to object: this is possible in javascript

//but in typescript we use index signature way to do so:
class SeatAssignment {
  // index signature property: dynamically add values to object in ts
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Hussain";
seats["A2"] = "Hamim";
// seats.A3 = 1; // give type error

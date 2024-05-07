////Inheritance:
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Walking...");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test...");
  }
}

// let student = new Student(1, "Hussain", "Hamim");
// student.walk;

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

let teacher = new Teacher("Hussain", "Hamim");
// console.log(teacher.fullName);

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

//// Polymorphism:
printNames([
  new Student(1, "Hussain", "Hamim"),
  new Teacher("Haroon", "Khan"),
  new Principal("Hamza", "Khan"),
]);

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

//// Open Closed Principle:
//class should be Open for extension and Closed for modification.

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
console.log(teacher.fullName);

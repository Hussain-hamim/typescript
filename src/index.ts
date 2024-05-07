// Abstract class and method:
// abstract class mean it have to be extended by other
abstract class Shape {
  constructor(public color: string) {}

  //// the abstract method in abstract class do not have implementation.
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: string, color: string) {
    super(color);
  }

  override render(): void {
    console.log("rendering a circle...");
  }
}

//// it do not make sense
// let shape = new Shape("red"); // cannot create instance of abstract class.
// shape.render();

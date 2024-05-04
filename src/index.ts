//unknown type:

function render(document: unknown) {
  //Narrowing
  if (typeof document === "string") {
    document.toUpperCase();
    console.log(document);
  }
  // document.move();
  // document.fly();
}
render("Hussain");

// type assertions:
let phone = document.getElementById("phone") as HTMLInputElement;
let phone2 = <HTMLInputElement>document.getElementById("phone");

//after the period you can see the method for the input element:
// we tell the compiler that we know more about the element.
phone.value;
phone2.value;

//HTMLElement
//HTMLInputElement

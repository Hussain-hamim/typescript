//object:

//we can it make optional
let employee: {
  id: number;
  name?: string;
} = {
  id: 1,
};
employee.name = "Hussain";

//we can initialize it to empty string
let employee2: {
  id: number;
  name: string;
  readonly age: number;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "",
  age: 22,
  retire: (date: Date) => {
    console.log(date);
  },
};
employee2.name = "Hussain";
// employee2.age = 222;

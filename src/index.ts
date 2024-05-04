//object:
//type aliases: show shape of our object.
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Hussain",
  retire: (date: Date) => {
    console.log(date);
  },
};

let emp = { ...employee };

let weight: number | string; //union type
let weight2: number & string; //intersection type

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// intersection type with (&)
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag() {},
  resize() {},
};

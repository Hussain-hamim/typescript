//// type mapping:
interface Product {
  name: string;
  price: number;
}

type readOnlyProduct = {
  //index signature, //keyof
  readonly [K in keyof Product]: Product[K]; // type mapping
};

// this is generic not just for product:
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

let product: readOnlyProduct = {
  name: "a",
  price: 1,
};
// product.name = 'b'; //can not assign cuz it's readonly

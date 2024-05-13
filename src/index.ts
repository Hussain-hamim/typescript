// Required<Type>:
// Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

// const obj2: Required<Props> = { a: 5 };

console.log(obj.a);

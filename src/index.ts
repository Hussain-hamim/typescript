// Nullable type:
// we can use with union type
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);

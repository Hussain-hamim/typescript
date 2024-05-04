// the Never type:
function reject(message: string): never {
  throw new Error(message);
}
reject("..."); //the next line is not reachable...
console.log("Hello there");

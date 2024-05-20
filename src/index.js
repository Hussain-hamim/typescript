// let vs const:
const shrek = { species: "ogre" };
// const value are read-only, so we can't point to a different value.
// shrek = "fiona"; // type error
// but we can mutate the object our wire point to
shrek.species = "human";
console.log(shrek.species);

// remember that const prevents variable reassignment - not object mutation

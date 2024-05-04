let speed: number | null = null;

let ride = {
  // falsy: (undefined, null, '', false, 0)
  // speed: speed !== null ? speed : 30,

  // Nullish coalescing operator(equal to line 5)
  speed: speed ?? 30,
};

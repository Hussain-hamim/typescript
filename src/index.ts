//literal type (exact. specific) value:

let quantity: 50 | 100 = 50;

type Quantity = 100 | 500;
let quantity2: Quantity = 500;

type Metric = "cm" | "inch";

// let metric: Metric = 'hussain';//error
let metric2: Metric = "cm";

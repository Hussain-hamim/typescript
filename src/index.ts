class keyValuePairs<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new keyValuePairs<number, string>(1, "Hussain");
let pair2 = new keyValuePairs<string, string>("A", "Hussain");
//// we can ignore supplying generic type, the compiler can infer:
let pair3 = new keyValuePairs("A", "Hussain");

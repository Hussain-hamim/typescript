class keyValuePairs {
  constructor(public key: number, public value: string) {}
}
class StringkeyValuePairs {
  constructor(public key: string, public value: string) {}
}

let pair = new keyValuePairs(1, "Hussain");
let pair2 = new StringkeyValuePairs("1", "Hussain");

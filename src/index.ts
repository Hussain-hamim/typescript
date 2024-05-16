// Extending generic classes:
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _object: T[] = [];

  add(obj: T): void {
    this._object.push(obj);
  }
  // if T is Product then
  // keyof T => 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    return this._object.find((obj) => obj[property] === value);
  }
}
let store3 = new Store<Product>();
store3.add({ name: "a", price: 1 });
store3.find("name", "a");
store3.find("name", 1);
store3.find("price", 1);
// store3.find("notExistingProperty", 1); // compile time error

// let store = new Store<Product>();

//// pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store = new CompressibleStore<Product>();
store.add({ name: "Hamim", price: 3 });
store.compress();

// restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._object.find((obj) => obj.name === name);
  }
}

// fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}

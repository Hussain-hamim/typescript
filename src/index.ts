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
}
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

//// https://mywebsite.com/users
//// https://mywebsite.com/products

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}
// fetch<Result>("www.mywebsite.com/users");

interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<User>("www.mywebsite.com/users");
result.data;

fetch<Product>("www.mywebsite.com/users");

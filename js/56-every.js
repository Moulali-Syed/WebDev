const numbers = [2, 4, 6, 8, 10];
const ans = numbers.every((num) => num % 2 === 0);
//every returns true , if all conditions for all elements is true
console.log(ans);

const products = [
  { productId: 1, productName: 'p1', price: 300 },
  { productId: 2, productName: 'p2', price: 3900 },
  { productId: 3, productName: 'p3', price: 400 },
  { productId: 4, productName: 'p4', price: 600 },
  { productId: 5, productName: 'p5', price: 8700 },
];

//check  all product price less than 10000
const res = products.every((item) => item.price < 10000);
console.log(res);

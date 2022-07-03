const numbers = [3, 5, 8, 7];
//to check if atleast one number is even
const ans = numbers.some((num) => num % 2 === 0);
console.log(ans);

const products = [
  { productId: 1, productName: 'p1', price: 300 },
  { productId: 2, productName: 'p2', price: 3900 },
  { productId: 3, productName: 'p3', price: 400 },
  { productId: 4, productName: 'p4', price: 600 },
  { productId: 5, productName: 'p5', price: 8700 },
];

//check if any product price greater than 5000
const res = products.some((prod) => prod.price > 5000);
console.log(res);

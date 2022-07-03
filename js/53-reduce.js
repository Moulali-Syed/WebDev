const numbers = [1, 2, 3, 4, 5];

//find sum of all nums in array
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
//0-is initial value
console.log(sum);

/*

accumulator  currentValue  return
1               2           3
3               3           6
6               4           10
10              5           15


*/

const userCart = [
  { productId: 1, productName: 'mobile', price: 120000 },
  { productId: 2, productName: 'laptop', price: 140000 },
  { productId: 3, productName: 'tv', price: 10000 },
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount);
//reduce doesnot chnage our actual array , creates a new one

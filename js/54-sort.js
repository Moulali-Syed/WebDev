//sort
//sort chnage our actual array
const numbers = [5, 9, 1200, 400, 30000];
numbers.sort();
console.log(numbers);
/*

[5, 9, 1200, 400, 30000];
[53,57,49,52,51]

'0' - 48
'1' - 49
'2' - 50
'3' - 51
'4' -52
'5' - 53
'6' - 54
'7' - 55
'8' - 56
'9' - 57

after sorting gives output as  [1200, 30000, 400, 5, 9]

javascript considers numbers as string then it will sort based on there ASCII values

A- 65 , Z-90

a-97 , z-123
*/

//sort in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers);

//sort in descending order
numbers.sort((a, b) => b - a);
console.log(numbers);

//price lowToHigh HighToLow
const products = [
  { productId: 1, productName: 'p1', price: 300 },
  { productId: 2, productName: 'p2', price: 3900 },
  { productId: 3, productName: 'p3', price: 400 },
  { productId: 4, productName: 'p4', price: 600 },
  { productId: 5, productName: 'p5', price: 8700 },
];

const lowToHigh = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});

console.log(lowToHigh);

const highToLow = products.slice(0).sort((a, b) => {
  return b.price - a.price;
});

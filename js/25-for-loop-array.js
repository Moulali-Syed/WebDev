let fruits = ['apple', 'mango', 'grapes', 'banana'];

// for (let i = 0; i < 9; i++) {
//   console.log(i);
// }

//length
console.log(fruits.length);
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log(fruits[fruits.length - 1]);
console.log(fruits[fruits.length - 2]);

//uppercase
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i].toUpperCase());
}

//add in new array
let frts = [];
for (let i = 0; i < fruits.length; i++) {
  frts.push(fruits[i]);
}

console.log(frts);

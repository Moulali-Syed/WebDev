const fruits = ['apple', 'banan', 'mango'];

let i = 0;
let fruits2 = [];
while (i < fruits.length) {
  console.log(fruits[i]);
  console.log(fruits[i].toUpperCase());
  fruits2.push(fruits[i]);
  i++;
}

console.log(fruits2);

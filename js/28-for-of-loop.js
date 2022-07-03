const fruits = ['apple', 'banana', 'grapes', 'mangoes'];

const fruits2 = [];
//for of internally uses for loop
for (let fruit of fruits) {
  console.log(fruit);
  fruits2.push(fruit.toUpperCase());
}

console.log(fruits2);

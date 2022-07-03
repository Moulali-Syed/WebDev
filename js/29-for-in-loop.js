const fruits = ['apple', 'banana', 'mango', 'grapes'];
let fruits2 = [];
for (let index in fruits) {
  console.log(fruits[index]);

  fruits2.push(fruits[index]);
}

console.log(fruits2);

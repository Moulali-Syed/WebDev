//Sets - it is iterable
/*
store data
sets also have its own methods 
no index-based access
order is not guaranteed
unique items only [duplicates not allowed]

*/

const numbers = new Set([1, 2, 3]);

console.log(numbers);
console.log(numbers[0]); //cannot access based on index
//thus order is not guaranteed

numbers.add(9);
numbers.add(10);

numbers.add('apple');
numbers.add(['item1', 'item2']);
numbers.add(['item1', 'item2']); //these 2 arrays are stored in different memory locations , so both will be added in set

if (numbers.has(1)) {
  console.log('1 is present');
} else {
  console.log('1 is not present');
}

for (let num of numbers) {
  console.log(num);
}

const myArr = [1, 2, 1, 5, 6, 2, 0, 5];
const uniqueElements = new Set(myArr);
// console.log(uniqueElements.length); //we cannot use length with set , we get undefined
console.log(myArr);
console.log(uniqueElements);

let length = 0;
for (let element of uniqueElements) {
  length++;
}
console.log(length);

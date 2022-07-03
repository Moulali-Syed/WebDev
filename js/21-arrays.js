//arrays
//array is reference type
let fruit = 'Apple';
//collection of elements , ordered collection of elements/items is an array

let fruits = ['apple', 'mango', 'banana'];
//array has index
console.log(fruits);

let numbers = [1, 2, 3, 4];
let mixed = [1, 2, 3, 4, 'string', null, undefined];

console.log(mixed);
console.log(numbers);

//access using index - index starts from 0
console.log(numbers[2]);

//array is mutable
console.log(fruits);
fruits[1] = 'grapes';
console.log(fruits);

//reference type are called object , array is object type

console.log(typeof fruits); //object
console.log(Array.isArray(fruits)); //true -  to check if it is array

let obj = {};
console.log(Array.isArray(obj)); //false

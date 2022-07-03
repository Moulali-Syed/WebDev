/*
arrays are good but not sufficient
for real world data

objects store key value pairs
objects dont have index

objects are reference type

*/

//create object
const person = { name: 'apple', age: 1 };
console.log(person);

console.log(typeof person);

//when we create object using {} - we call it object literal

//access data from object
console.log(person.name);
console.log(person.age);

console.log(person['name']);

const person1 = {
  name: 'mango',
  age: 2,
  hobbies: ['eating', 'sleeping'],
};
console.log(person1);
console.log(person.hobbies);

//how to add key value pair in object
person.gender = 'male';
console.log(person);
person['city'] = 'Shimla';

console.log(person);

//dot vs bracket notation
const key = 'email';
const p1 = {
  name: 'banaa',
  age: 1,
  'person hobbies': ['eat', 'sleep'],
};

console.log(p1['person hobbies']); //but dot notation cannot access this

p1['key'] = 'bnaa@gmail.com'; //by using dot notation we cannot add key from a variable as a key
console.log(p1);

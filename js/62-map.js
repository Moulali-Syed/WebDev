/*
map is an iterable
store data in ordered fashion

store key value pair(like object)
duplicate keys are not allowed like objects

difference between map and set
objects can only have string or symbol as key
in maps u can use anything as key like array , number , string

*/

//object literal
//key - string ,key - symbol
const person = {
  firstName: 'apple',
  age: 1,
};

console.log(person.firstName);
console.log(person['firstName']);

for (let key in person) {
  console.log(typeof key);
}

//mao also store key value pair
const person1 = new Map();
person1.set('firstName', 'mango');
person1.set('age', 1);
person1.set(1, 'one');
person1.set([1, 2, 3], 'onetwothree');
person1.set({ 1: 'one' }, 'oneTwo');
console.log(person1);

console.log(person1.get('age'));
console.log(person1.get(1));

console.log(person1.keys());

for (let key of person1.keys()) {
  console.log(key, typeof key);
}

for (let key of person1) {
  console.log(key); //returns key value pair , in form of array
}

for (let [key, value] of person) {
  console.log(key, value);
}

const person2 = new Map([
  ['firstName', 'a'],
  ['age', '1'],
]);

console.log(person2);

const person3 = {
  id: 1,
  firstName: 'grapes',
};
const userInfo = new Map();
userInfo.set(person1, { age: 8, gender: 'male' });
console.log(userInfo);

console.log(person3.id);
console.log(userInfo.get(person1));
console.log(userInfo.get(person1).age);

const person = {
  name: 'apple',
  age: '1',
  hobbies: ['eat', 'sleep'],
};

//for in
for (let key in person) {
  console.log(key);
  console.log(person[key]);

  console.log(`${key} : ${person[key]}`);
}

console.log('===========================');
//Object.keys
console.log(Object.keys(person));
const val = Array.isArray(Object.keys(person));

console.log(val); //true

for (let key of Object.keys(person)) {
  console.log(person[key]);
}

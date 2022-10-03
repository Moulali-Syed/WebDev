//Object creation

let person = {
  fname: 'Apple',
  age: 2,
  lName: 'Shimla',
  'full Name': 'Apple Shima',
};
console.log(person);

//accessing properties - 2 ways
//- dot notation
console.log(person.fname);
console.log(person.lName);
console.log(person.age);

//array notation
console.log(person['fname']);
console.log(person['lName']);
console.log(person['age']);

//if the key has space in its name , then it can be accessed only through array notation[but this is not recommended , instead give underscore]
console.log(person['full Name']);

//any property that doesnot exist , gives result as  undefined
console.log(person.city); //undefined

//modify values of object properties
person.fname = 'Banana';
console.log(person.fname);

//to add new properties
person.country = 'India';
console.log(person);
/*
{
  fname: 'Banana',
  age: 2,
  lName: 'Shimla',
  'full Name': 'Apple Shima',
  country: 'India'
}

*/

//delete a property
delete person.lName;
console.log(person);
/*
{
  fname: 'Banana',
  age: 2,
  'full Name': 'Apple Shima',
  country: 'India'
}
*/

//to check if a property is present in the object
//one way is when we try to access it we get undefined
//other way is to use in operator - returns true or false
console.log('height' in person); //false
console.log('age' in person); //true

//iterating over properties of object - use for in loop
for (let key in person) {
  console.log(key + ':' + person[key]);
  //we must use array notation , dot notation will not work
}

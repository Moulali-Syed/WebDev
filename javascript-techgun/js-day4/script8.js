var student1 = {
  firstName: 'Apple',
  lName: 'Shimla',
  age: 1,
  class: 1,
};

//we can create a blue print , if we want to create multiple objects with same properties
//we can use object constructor function

function Student(fName, lName, age, cls) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.class = cls;
}

var stud1 = new Student('banana', 'ap', 2, 1);
console.log(stud1);

//now we can create multiple objects
var stud2 = new Student('grapes', 'mp', 3, 2);
var stud3 = new Student('pineapple', 'pa', 2, 3);

//add a property to particular object
stud1.nationality = 'Indian';
console.log(stud1);

//add a method to particular object
stud1.name = function () {
  return this.firstName + ' ' + this.lastName;
};

console.log(stud1);
console.log(stud1.name());

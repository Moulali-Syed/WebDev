//we can add methods and objects to constructor function using prototypes

function Student(fName, lName, age, cls) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.class = cls;
}

Student.prototype.nationality = 'Indian';

Student.prototype.name = function () {
  return this.firstName + ' ' + this.lastName;
};
var stud1 = new Student('Apple', 'Shimla', 2, 1);
var stud2 = new Student('Banana', 'AP', 3, 2);
//Now after some code i wanted to add some properties and methods to constructor function , so that it get added to all objects

console.log(stud1);
console.log(stud1.nationality); //Indian
console.log(stud2.nationality); //Indian

console.log(stud1.name());
console.log(stud2.name());

//prototype is inherited by all javascript functions , to which we can add the required methods and properties

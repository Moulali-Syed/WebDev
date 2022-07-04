class Person {
  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }

  get fullName() {
    return `${this.fName} ${this.lName}`;
  }

  setName(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  set fullName(fullName) {
    const [fName, lName] = fullName.split(' ');
    this.fName = fName;
    this.lName = lName;
  }
}

const person1 = new Person('apple', 'Shimla', 1);
console.log(person1);
console.log(person1.fName);
// console.log(person1.fullName());

//but i want to access fullName method as a property , simply write get infront of fullName
console.log(person1.fullName);

person1.setName('mango', 12);
console.log(person1.fName);
console.log(person1.lName);

//suppose we want to change name as if its property , then use set method
person1.fullName = 'hello jerry';
console.log(person1);

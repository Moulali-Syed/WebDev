var person = {
  name: 'Apple',
  age: 1,
  //   getName: function () {
  //     return this.name.toUpperCase();
  //   },
  get getName() {
    return this.name.toUpperCase();
  },
  set setName(n) {
    this.name = n.toUpperCase();
  },
};
console.log(person.name); //Apple

//print name in capital letters
console.log(person.name.toUpperCase());
// console.log(person.getName());
console.log(person.getName); //we can call get function as a property

//we were modifying using
person.name = 'Banana';
//but i want to modify when data is getting enetered and store in capital letters
//then we can use set function

person.setName = 'hello';
console.log(person.name);
console.log(person.getName);

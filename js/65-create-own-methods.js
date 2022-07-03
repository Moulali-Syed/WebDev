//methods
//functions inside object are called method

const person = {
  fName: 'apple',
  age: 1,
  about: function () {
    console.log(`person name is ${this.fName}  and age is ${this.age}`);
  },
};

person.about();

//this refer to the object that is calling it - in above code this is person object

function personInfo() {
  console.log(`person name is ${this.fName} and age is ${this.age}`);
}
const person1 = {
  fName: 'banana',
  age: 2,
  about: personInfo,
};

const person2 = {
  fName: 'grapes',
  age: 3,
  about: personInfo,
};

person1.about();
person2.about();

//functions inside object are called method
// const user = {
//   fName: 'apple',
//   age: 1,
//   about: function () {
//     console.log(this.fName, this.age);
//   },
// };

//can be written as

const user = {
  fName: 'apple',
  age: 1,
  about() {
    console.log(this.fName, this.age);
  },
};

user.about();

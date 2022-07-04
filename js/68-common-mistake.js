const user1 = {
  fName: 'apple',
  age: 1,
  about: function () {
    console.log(this.fName, this.age);
  },
};

user1.about(); //apple 1
const myFunc = user1.about; //here we r just assigning function , so it doesnot know what is this here so returns undefined
myFunc(); //undefined undefined

const myFunc1 = user1.about.bind(user1);
myFunc1();

const user1 = {
  fName: 'apple',
  age: 1,
  about: function () {
    console.log(this.fName, this.age);
  },
};

user1.about();

//arrow function doesnot have its own this , but it takes from its surrondings one level up , below code this is window

const user2 = {
  fName: 'apple',
  age: 1,
  about: () => {
    console.log(this.fName, this.age);
  },
};

user2.about();

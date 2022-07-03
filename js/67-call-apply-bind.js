const user1 = {
  fName: 'apple',
  age: 1,
  about: function (hobby, favMusic) {
    console.log(this.fName, this.age, hobby, favMusic);
  },
};

user1.about();

const user2 = {
  fName: 'grapes',
  age: 2,
};

//i need to use about in user2 , which is present in user1

//by using call method we can change the reference of this to user2
user1.about.call(user2); //grapes 2
user1.about.call(); //undefined undefined
user1.about.call(user1); //apple 1
user1.about.call(user2, 'guitar', 'moazrt');

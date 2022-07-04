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

//we can call any function using call method
const sayHi = () => {
  console.log('Hi');
};
sayHi.call();

//apply - behaves same as call , internally uses call
//only difference is when we are passing arguments we pass it in array
user1.about.call(user2, 'guitar', 'moazrt');

user1.about.apply(user2, ['guitar', 'moazrt']);

//bind - bind returns a function , we can call that function whenever needed
const func = user1.about.bind(user1, 'guitar', 'bach');
func();

function sayHello() {
  console.log('Hello .....');
}
const func1 = sayHello.bind(user1);
func1();

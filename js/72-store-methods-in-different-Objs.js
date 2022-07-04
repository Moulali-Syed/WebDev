// 72-store-methods-in-different-Objects
function createUser(fName, lName, email, age, address) {
  const user = {};
  user.fName = fName;
  user.lName = lName;
  user.email = email;
  user.age = age;
  user.address = address;

  user.about = function () {
    return `${this.fName} is ${this.age} years old`;
  };

  user.is18 = function () {
    return this.age >= 18;
  };

  return user;
}

const user1 = createUser(
  'mango',
  'guntur',
  'mango@gmail.com',
  2,
  'own address'
);

const user2 = createUser('apple', 'Shimla', 'apple@gmail.com', 1, 'ShimlaHome');

//every time i create a new user , methods about , is18 will get created seperately for each user
//thus consuming more memory
//we can have only method for all
//remove about and is18 methods from function and create a new Object and place these methods inside it
//then store the reference of these methods inside createUser function

const userMethods = {
  about: function () {
    return `${this.fName} is ${this.age} years old`;
  },

  is18: function () {
    return this.age >= 18;
  },
};

function createUser1(fName, lName, email, age, address) {
  const user = {};
  user.fName = fName;
  user.lName = lName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

const user3 = createUser1('tom', 'cat', 'tom@gmail.com', 3, 'poland');
const user4 = createUser1('jerry', 'rat', 'jerry@gmail.com', 1, 'Holand');
console.log(user3.about());
console.log(user4.about());

//create functions to create multiple objects

const user = {
  fName: 'apple',
  lName: 'Shimla',
  email: 'apple@gmail.com',
  age: 1,
  address: 'house number , colony , pincode ,state',
  about: function () {
    return `${this.fName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

const aboustUser = user.about();

//what if i want multiple users as above , we cant do it as above all time
//so we create a function , that takes input as fName,lName,email,age and create Object , add key value pairs then returns a Object

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

console.log(user1);
const isAbove18 = user1.is18();
console.log(isAbove18);
console.log(user1.about());

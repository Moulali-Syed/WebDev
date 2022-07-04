const userMethods = {
  about: function () {
    return `${this.fName} is ${this.age} years old`;
  },

  is18: function () {
    return this.age >= 18;
  },

  sing: function () {
    return 'toon na la na na la';
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
  user.sing = userMethods.sing;
  return user;
}

const user3 = createUser1('tom', 'cat', 'tom@gmail.com', 3, 'poland');
console.log(user3.sing());
//what if i want one more method , then add it in userMethods and pass reference in createUser1 function

//what if there are so many methods that needs to be added in userMethods object , and u forgot to add its reference inside createUser1 function
//this could lead to problem
//we can overcome using Object.create

function createUser1(fName, lName, email, age, address) {
  const user = Object.create(userMethods);
  user.fName = fName;
  user.lName = lName;
  user.email = email;
  user.age = age;
  user.address = address;

  return user;
}

const user4 = createUser1('tom1', 'cat1', 'tom1@gmail.com', 2, 'poland1');
console.log(user4.sing());
//========================================================================================================================================
const obj1 = {
  key1: 'value1',
  key2: 'value2',
};

const obj2 = {};
obj2.key3 = 'value3';

console.log(obj2.key1); //undefined
//what i want javascript to behave is , if key1 is not present in obj2 , i want to javascript to check in obj1
//if key1 is present in obj1 and print it

//we can create empty object in javascript in one more way
const obj3 = Object.create(obj1);
obj3.key4 = 'value4';
console.log(obj3.key4);
console.log(obj3.key1); //now it gives value1 , because we used Object.create

console.log(obj3.__proto__); // { key1: 'value1', key2: 'value2',}

//__proto__ , [[prototype]]   are same
//but prototype is completely different

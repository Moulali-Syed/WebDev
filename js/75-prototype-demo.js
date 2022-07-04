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

//we know that whenever we create a function , we get prototype an empty object
//in above we are using Object.create to link the object to a object inside function
//But as we know that , function itself is having an empty object , now we can create key value pairs inside the function prototype only

function createUser2(fName, lName, email, age, address) {
  const user = Object.create(createUser2.prototype);
  user.fName = fName;
  user.lName = lName;
  user.email = email;
  user.age = age;
  user.address = address;

  return user;
}

createUser2.prototype.about = function () {
  return `${this.fName} is ${this.age} years old`;
};

createUser2.prototype.is18 = function () {
  return this.age >= 18;
};

createUser2.prototype.sing = function () {
  return 'toon na la na na la';
};

const user5 = createUser2('tom1', 'cat1', 'tom1@gmail.com', 2, 'poland1');
console.log(user5.sing());

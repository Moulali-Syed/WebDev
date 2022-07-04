//new keyword
function createUser(fName, age) {
  this.fName = fName;
  this.age = age;
}

createUser.prototype.about = function () {
  console.log(this.fName, this.age);
};

const user1 = new createUser('apple', 1);
console.log(user1);

//new keyword do below
//1.empty object this = {}
//2.return this

/*

function createUser2(fName, lName, email, age, address) {
  const user = Object.create(createUser2.prototype);       ---------> this step will be set automatically when we use new keyword
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
*/

//this below function is called Constructor function
//whichever function to be called with new keyword , it is convention to make firstLetter capital for that method
function CreateUser2(fName, lName, email, age, address) {
  this.fName = fName;
  this.lName = lName;
  this.email = email;
  this.age = age;
  this.address = address;
}

CreateUser2.prototype.about = function () {
  return `${this.fName} is ${this.age} years old`;
};

CreateUser2.prototype.is18 = function () {
  return this.age >= 18;
};

const u1 = new CreateUser2('apple', 'Shimal', 'apple@gmail.com', 1, 'Shimla');
console.log(u1);
console.log(u1.is18());

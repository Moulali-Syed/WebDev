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
for (let key in u1) {
  if (u1.hasOwnProperty(key)) {
    console.log(key);
  }
}

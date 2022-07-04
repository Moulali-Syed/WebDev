// class are fake in javascript , internally it will be working with prototypes only

class CreateUser {
  constructor(fName, lName, email, age, address) {
    //whenever we create a object with new keyword ,constructor will be called automatically
    console.log('Constructor called');
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.fName} is ${this.age} years old`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return 'toon na la na na la';
  }
  func(a) {
    console.log(a);
  }
}

const user1 = new CreateUser('apple', 'SHimla', 'apple@gmail.com', 1, 'Shimla');
console.log(user1.about());
user1.func(10);
console.log(Object.getPrototypeOf(user1));

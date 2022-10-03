//propeties of one object can accessed inside other object

//if we want to access properties of same object we can use this keyword
let person = {
  fName: 'Moulali',
  lName: 'Syed',
  sayHello() {
    console.log('Hello! Iam ' + this.fName + ' I have a ' + car.brand + ' car');
  },
};

let car = {
  brand: 'TATA',
  model: 'Safari',
};

person.sayHello(); //Hello! Iam Moulali I have a TATA car

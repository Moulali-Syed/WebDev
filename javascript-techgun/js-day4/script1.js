let person = {
  fName: 'Moulali',
  lName: 'Syed',
  sayHi: function () {
    console.log('Hi!!!');
  },
  sayHappy() {
    console.log('Happy');
  },

  sayMorning: () => {
    console.log('Morning');
  },
};

person.age = 25;
person.sayHello = function () {
  console.log('Hello');
};

person.sayHello(); //Hello

function greet() {
  console.log('Hello !!');
}

person.sayHello1 = greet;
person.sayHello1(); //Hello !!

person.sayHi(); //Hi!!!
person.sayHappy(); //Happy

person.sayMorning(); //Morning

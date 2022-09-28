//this is closure

//function can return function
function myFunc() {
  return 1;
}

const ans = myFunc();
console.log(ans); //1

// ****************
//function can return function
function myFunc() {
  return 'apple';
}

const anss = myFunc();
console.log(anss); //"apple"

//similarly we can make the function to return a string , object, array

//******************************************* */

//outer function returning a function
function outerFunc() {
  function innerFunc() {
    console.log('hello world');
  }
  return innerFunc;
}
const ans1 = outerFunc();
console.log(ans1); //prints function
//we can also call ans1
ans1(); //returns hello world

// *************************************************

function printFullName(fName, lName) {
  function printName() {
    console.log(fName, lName);
  }
  return printName;
}

const ans2 = printFullName('Apple', 'Shimla');
ans2(); //Apple Shimla

/*

when we are returning function from another function ,then it will take all the variables inside the function
inner function can access outer function variables
*/

function hello(x) {
  const a = 'varA';
  const b = 'varB';
  return function () {
    console.log(a, b, x);
  };
}
const ans3 = hello('arg');
ans3(); //varA varB arg

function myfun(power) {
  return function (num) {
    return num ** power;
  };
}
const square = myfun(2);
const ans4 = square(3);
console.log(ans4);

const mufuncc = (power) => (number) => number ** power;
// ===============================================================
function func2() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log('hi you called me');
      counter++;
    } else {
      console.log('u already called me before');
    }
  };
}
const func1 = func2();
func1();
func1();

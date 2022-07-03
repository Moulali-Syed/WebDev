function myFunc() {
  function hello() {
    console.log('hello world');
  }
  return hello;
}

const ans = myFunc();
ans();

function fun1() {
  function sayHi() {
    return 'hi';
  }
  return sayHi;
}
const a = fun1();
console.log(a());

//Higher order function - takes function as input and returns function as output

function fun() {
  return function () {
    console.log('hey!!');
  };
}
const b = fun();
b();

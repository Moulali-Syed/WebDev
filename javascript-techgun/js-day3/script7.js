// //return a value in javascript

// function add(a, b) {
//   let d = [2, 3, 4];
//   return d;
// }

// let c = add(2, 3);
// console.log(c);
// //[ 2, 3, 4 ]

// function compare(a, b) {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
// let res = compare(5, 6);
// console.log(res);

//global vs local variable
// let car = 'audi'; //global varibale
// function add() {
//   let res = 33; //local variable
//   console.log(res);
// }
// add();
//local variable can used inside the function in which it is defined , if tried accessing outside gives error as it is not defined
//global variable can be used inside function and outside
//variable  inside a function is local varibale,variable outside a function is global variable

//function expression - assigning a function to a variable
// let show = function () {
//   console.log('hello');
// };
// show();

// function show() {
//   console.log('hello world');
// }
// setTimeout(show, 3000); //executes show function after 3 seconds

// //for suppose i want to use function only once
// setTimeout(function () {
//   console.log('hello!!');
// }, 3000);

//Immediately Invoked function - IIFE
//we want a function to get executed as we write
let fun = function () {
  console.log('helo');
  //   alert('hello');
};
fun();

(function () {
  console.log('hello from IIFE');
})();

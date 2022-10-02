var a;
a = 2;
// alert(a);

// this is a comment

/*
declaring  a variable
var fname = 'Apple';
alert(fname);

var lname = fname + ' fruit';
console.log(lname);
*/

let digit1 = 10;
const x = 2;
digit1 = 30;
console.log(digit1 + x);
// const a; - -'const' declarations must be initialized.
let b;

let x1 = 5,
  y = 'tom';

let m = "hell'o";

let n = 'Appl"e';

let x2 = typeof 10;
let y2 = typeof 'apple';
console.log(x2 + ' ' + y2);

let m1 = 'hello';
console.log(typeof m1); //string

let z1 = 'apple';
console.log(`hello ${z1}`);

console.log(5 == 5);
console.log(5 == '5');
console.log(5 == 6);
/*
true
true
false
*/

let age = 14;
let hasVoterCard = 'Yes';
if (age >= 12) {
  if (hasVoterCard == 'Yes') {
    console.log('u can vote');
  } else {
    console.log('get ur voter id card');
  }
} else {
  console.log('u can not vote');
}

//if we have only one statment we can ignore curly brace
if (age > 10) console.log('hi');

let isLoggedIn = 0;
if (isLoggedIn == 0) {
  document.write('Login');
} else {
  document.write('LogOut');
}

let option = isLoggedIn == 1 ? 'LogOut' : 'Login';

let input = 1;
if (input === 1) {
  document.write('continue......');
} else if (input == 'y') {
  document.write('continue......');
} else if (input == 'yes') {
  document.write('continue......');
} else if (input == 'n') {
  document.write('break......');
} else if (input == 'no') {
  document.write('break......');
} else if (input === 0) {
  document.write('break......');
} else {
  document.write('wrong input');
}

switch (input) {
  case 1:
    document.write('continue......');
    break;
  case 'y':
    document.write('continue......');
    break;
  case 'yes':
    document.write('continue......');
    break;
  case 0:
    document.write('break.....');
    break;
  case 'n':
    document.write('break......');
    break;
  case 'no':
    document.write('break......');
    break;
  default:
    document.write('Wrong Input......');
}

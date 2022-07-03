//let and const are block scope
//var is function scope

//below is block
{
  let firstName = 'apple';

  console.log(firstName);
}

//error because let is block scope
// console.log(firstName); //44-block-function-scope.js:9 Uncaught ReferenceError: firstName is not defined

{
  let firstName = 'mango';
  console.log(firstName);
}

{
  const firstName = 'jackfruit';
  console.log(firstName);
}

const firstName = 'grapes';
console.log(firstName);

//var is function scope
{
  var fNme = 'a';
  console.log(fNme);
}
{
  console.log(fNme);
}

if (true) {
  let lName = 'abc';
  console.log(lName);
}
// console.log(lName); //throws error , cannot access - Uncaught ReferenceError: lName is not defined

if (true) {
  var lname = 'mnb';
  console.log(lname);
}
console.log(lname);

function myApp() {
  if (true) {
    let fname = 'lkj';
    console.log(fname);
  }
  //   console.log(fname); //error
}

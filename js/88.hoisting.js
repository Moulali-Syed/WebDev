//hoisting
console.log(this); //1
console.log(window); //2
console.log(myFunction); //3
myFunction(); //ouput:  this is my function
console.log(firstName); //4

//function declaration
function myFunction() {
  //5
  console.log('this is my function');
}

var firstName = 'apple';
var lastName = 'Shimla';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

// as we have seen the variables and function are created in global memory ,before execution
//================================================================================================================

myFunction1(); //1
// lets change function declaration to function expression
var myFunction1 = function () {
  console.log('this is my function');
};

console.log(myFunction1); //2
myFunction1();

/*
global memory:
window
this: window
myFunction1 - will be set to undefined , because it is function expression , as any other variable , it will be set to undefined

execution phase:
1- undefined
2 - function () {
  console.log('this is my function');
};
*/

//when i call a function without declaring it - i will get error as hello is not defined
// hello();

function hello1() {
  console.log('hello world');
}
hello1();
//this above is normal function declaration and then calling it

//below we are calling function and then declaring it
//in javascript it doesnot create error, because javascript will move all the function
//declarations and varibales at the top when it starts its execution
hello2();
function hello2() {
  console.log('hello 2');
}

//--Hoisting : to lift the code above

//----------------------------------------------------------
var x; //declaration
x = 7; //assignment
console.log(x); //call , normal output will be 7

var y; // when we declare a variable using var , javascript will automatically assign var y= undefined
console.log(y); //undefined
y = 9;

var z = 6;
console.log(z);

//hoisting example for varibale
n1 = 10;
console.log(n1); //10
var n1; //javascript will run this line before , as js will take all function declarations and variables to top
//when it starts execution

console.log(n2); //undefined[because only declaration is moved to top]
n2 = 12;
var n2;

console.log(n3); //undefined[because js will only take declaration but not assignment]
var n3 = 10;

//------------------------------------------------------------------
//ReferenceError: Cannot access 'num1' before initialization
// console.log(num1); //for let and const js doesnot assign a undefined value , it will hoist but not assign a value
let num1;
num1 = 7;

//-------------------------------
//if we just give num2 =100 , js doesnot throw any error , it will declare it on its own

num2 = 100;
console.log(num2); //100 - no error because js will declare var num2; on its own

//but to overcome this  , we can use js strict mode
//write in first line of js file ----> "use strict"
//now js will not allow varibales without declaration
//now above code num2 = 100; will throw error

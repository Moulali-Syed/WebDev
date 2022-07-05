console.log(this); //1
console.log(window); //2
console.log(myFunction); //3
console.log(firstName); //4

function myFunction() {
  //5
  console.log('this is my function');
}

var firstName = 'apple';
var lastName = 'Shimla';
var fullName = firstName + ' ' + lastName;
console.log(fullName);
/*

global scope

javascript first checks that there are 3 variables present , 1 function is present
firstName
lastName
fullName
myFunction

lexically function is present inside global scope
lexical scope - the way we write our code decides the scope of variables,function , here variables , function is at global scope


Global Execution context:
this will be added in stack
will be created in 2 phases
global memory | code execution phase

global memory:
window:{}
this:window
firstName:undefined
lastName:undefined
fullName:undefined
myFunction : f
when we create a function with function keyword , this will be created in global memory before execution

code execution phase:
this - window will be printed
window - window will be printed
myFunction - prints the complete function
        function myFunction() { //5
            console.log('this is my function');
         }
fullName - undefined

5- line nothing
6- 'apple'
7. 'Shimla'
8.  'apple Shimla'
9.'apple Shimla'
*/

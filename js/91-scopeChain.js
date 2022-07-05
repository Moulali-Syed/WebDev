//lexical environment and scope chain
const lName = 'Shimla';
const printName = function () {
  const fName = 'Apple';
  console.log(fName);
  console.log(lName);
};

printName();

/*

memory creation phase

window:{}
this:window
lname:unitialized
fName:unitialized

code execution phase
lName:'Apple'
printName: f
printName();--creates function execution context

local memory
arguments:[]
fname:unitialized


code execution

fname:'Apple'
lName:checks in parent , if not found in local memory
*/

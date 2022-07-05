//are let and const are hoitsed

console.log(firstName); //1
let firstName = 'appple';
console.log(firstName); //3

/*
execution phase

global execution context - 1. global memory , 2.code execution[happens in stack]


global memory
window:{}
this:window
firstName: unitialized in case of let , firstName is there but no value is assigned to it


code execution:
1- uncaught reference error : cannot access firstName before initialization
if we comment line 1 and execute , then line 3 executes


suppose i have written 

console.log(number)
then i will get error , uncaught reference error : number is not defined

let , const variables are hoisted , but we cannot use them till they are initialized


TDZ: temporal dead zone
let fname = 'mango';//1
console.log(fname);

before execution of line 1 , in global memory , fname is uninitailized - this is temporal dead zone of fname
once line 1 is executed fname is initialized , now i can use it any number of times


console.log(typeof lName);--uncaught reference error
let lName = 'Shimla';


console.log(typeof city);----undefined
city is not defined after 
*/

console.log(this); //1
console.log(window); //2
console.log(firstName); //3
var firstName = 'apple'; //4
console.log(firstName); //5
/*

global execution context -
        creation phase[of global execution context]
        code execution phase

creation phase[global memory]:
firstName:undefined[incase of var]
this: window[in browser]
window : {}//key value pairs


javascript is synchronous programming language , until firstline executes second line will not execute
javascript is single threaded , until firstline executes second line will not execute


code execution phase:
code executes line by line

this---->window object will be printed -1
window--->window will be printed -2
firstName ----> undefined - 3
firstName is now set to 'apple' -4
firstName ---> apple -5
*/

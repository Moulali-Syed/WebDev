//arguments object - we have arguments inside a function by default ,we can pass any number of arguments
function add() {
  if (arguments.length == 0) {
    console.log('No parameters passed!');
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
  }
}

//now we are storing function inside a variable ,now we can call function using variable name also
let addition = add;
addition(5, 3);
/*
8
*/

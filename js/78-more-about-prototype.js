let numbers = [1, 2, 3];
//prototype will be present for function
//internally javascript creates array as below
let nums = new Array(1, 2, 3); //internally array created as this step

console.log(Object.getPrototypeOf(nums));
console.log(nums);
console.log(Array.prototype);
console.log(Array.isArray(Array.prototype));

function hello() {
  console.log('hello');
}

console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);

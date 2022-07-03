hello(); //works only in case of function decalration , this is called hoisting

function hello() {
  console.log('hello world');
}

hello();

//in case of function expression we cannot use function before declaring it
//sayhi(); // Cannot access 'sayhi' before initialization
const sayhi = () => {
  console.log('Hi there');
};

sayhi();

console.log(a); //undefined
var a = 10;
console.log(a); //10

// let will thorw error
// console.log(b); //41-hoisting.js:21 Uncaught ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); //20

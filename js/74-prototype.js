function hello() {
  console.log('hello world');
}
//in javascript , function can also be treated as Object
console.log(hello.name); //return function name - as hello

//u can add ur own properties
hello.myOwnProperty = 'very unique value';
console.log(hello.myOwnProperty);

//name property tells function name
//function provides more useful properties

//function also provide free space ,means empty object - just for understanding
//this empty object is prototype
hello.prototype; // {}
//to add any key value to this function we can add it
console.log(hello.prototype); //which gives constructor
//only functions provide prototype property
if (hello.prototype) {
  console.log('prototype is present');
} else {
  console.log('prototype is not present');
}

//we can add any number of key value pairs inside prototype
hello.prototype.abc = 'abc';
hello.prototype.xyz = 'xyz';
hello.prototype.sing = function () {
  return 'lalalla';
};
console.log(hello.prototype);
console.log(hello.prototype.sing());

//prototype - we get empty object with a function , we can add any number of key value pairs inside it

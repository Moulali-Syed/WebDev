//undefined

//null

let firstName;
console.log(typeof firstName); //undefined - same for let and var , but const must declare a value

firstName = 'Apple';
console.log(typeof firstName, firstName);

let myVar = null;
console.log(myVar); //null
console.log(typeof myVar); //object
//typeof null is object , it is a bug in javascript - because of manyframeworks built , it is not getting corrected

//BigInt
let myNum = 123;
//in javascript we have a limit of number
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

let myNumber = BigInt(123456787654325676543456);
console.log(myNumber);

//Bigint can be created in 2ways
//1. BigInt(1234)
//2 . 123n

//we cannot add bigInt with normal number , it will give error as use explicit conversions

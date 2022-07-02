// trim() - remove spaces
let firstName = '   Apple       ';
console.log(firstName.length);
let newString = firstName.trim(); //creates a new string

console.log(newString.length);

//toUpperCase()
console.log(firstName.toUpperCase()); //creates a new string , but not change our actual firstName

//toLowerCase()
console.log(firstName.toLowerCase()); //creates a new String

//slice()
//specify start index and end index
let newString1 = firstName.slice(0, 4);
console.log(newString1);

//to start from  a particualr index
let newString2 = firstName.slice(2, 7);
console.log(newString2);

//to start from a  index value and go till end of string
let newString3 = firstName.slice(3);
console.log(newString3);

//typeof operator - tells the datatype
//datatypes
//string
//number 2 ,3 ,4 , 5.6
//booleans
// undefined
//null
//BigInt
// Symbol

let age = 22;
let city = 'Delhi';
console.log(typeof age);
console.log(typeof city);

// convert number to string  - add + ''[add empty string]
age = age + '';
console.log(typeof age); //string
console.log(typeof (age + ''));

//convert string to number [add + infront of the value]
let myStr = '34';
console.log(typeof myStr);

console.log(typeof +myStr);
myStr = +'34';
console.log(typeof myStr);

let a = '18';
a = Number(a);
console.log(typeof a);

let b = 20;
b = String(b);
console.log(typeof b);

//String Concatenation

let string1 = 'hello';
let string2 = 'there';
let string3 = string1 + ' ' + string2;
console.log(string3);

let s1 = '17';
let s2 = '10';
let s3 = s1 + s2;
let s4 = +s1 + +s2;
console.log(s3 + ' ' + s4);

//Tempalte strings
let ag = 21;
let fNam = 'Apple';
let aboutMe = 'My name is ' + fNam + ' and myage is ' + ag;
let aboutMe1 = `My name is ${fNam} and myage is ${ag}`;

console.log(aboutMe);
console.log(aboutMe1);

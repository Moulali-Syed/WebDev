// let type = 'hello';
// alert(typeof type); //string

// let type1 = 12;
// alert(typeof type1); //number

// let type2 = true;
// alert(typeof type2); //boolean

// //generally we get string as input in javascript

// //type conversion
// let type3 = 5 + null;
// console.log(type3); //5
// alert(typeof type3); //number

// let type4 = '5' + null;
// console.log(type4); //string
// alert(typeof type4); //5null

// let type5 = '5' + 2;
// console.log(type5); //52
// alert(typeof type5); //string

// let type6 = '5' - 2;
// console.log(type6); //3
// alert(typeof type6); //number

// let type7 = '5' * '2';
// console.log(type7); //10
// alert(typeof type7); //number

//only confusion is with + , with other operators it can figure out to convert to number or display NaN

// let type8 = '5' * 'yes';
// console.log(type8); //NaN
// alert(typeof type8); //number

/*
1.String()
2.Number()
3.Boolean()
*/

let n1 = 4;
console.log(typeof n1); //number
let n2 = String(n1);
console.log(typeof n2); //string

let s1 = '32';
console.log(typeof s1); //string
let s2 = Number(s1);
console.log(typeof s2); //number

let s3 = 'hello';
console.log(typeof s3); //string
let s4 = Number(s3);
console.log(s4); //NaN
console.log(typeof s4); //number

console.log('=============');
let b1 = true;
console.log(typeof b1); //boolean
let b2 = Number(b1);
console.log(b2); //1
console.log(typeof b2); //number

let b3 = false;
console.log(typeof b3); //boolean
let b4 = Number(b3);
console.log(b4); //0
console.log(typeof b4); //number

console.log('============');
let num1 = 32;
console.log(typeof num1); //number
let num2 = Boolean(num1);
console.log(num2); //true
console.log(typeof num2); //boolean

let num3 = 0;
console.log(typeof num3); //number
let num4 = Boolean(num3);
console.log(num4); //false
console.log(typeof num4); //boolean

console.log('----------');
let st1 = '';
let st2 = Boolean(st1);
console.log(typeof st2 + ' ' + st2); //boolean false

let st3 = 'apple';
let st4 = Boolean(st3);
console.log(typeof st4 + ' ' + st4); //boolean true

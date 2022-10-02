// let str = 'Moulali';
// //template literal
// let greet = `Hello ${str}`;
// console.log(greet);

// //New line character
// let str = 'Moulali \n Syed';
// console.log(str);
// /*
// Moulali
//  Syed
// */

// //tab space

// let str2 = 'Moulali\tSyed';
// console.log(str2);

// //use backslash to ignore
// let str = 'Moulali\\Syed';
// console.log(str);

// let str2 = 'Moulali "Syed';

// //to know length of string
// let str = 'Moulali';
// console.log(str.length); //7

// //index starts from 0
// console.log(str[3]); //l

// //concatenate string
// let str1 = 'Moulali';
// let str2 = 'Syed';
// console.log(str1 + ' ' + str2);

// //string comparision - js is case sensitive
// let str = 'Moulali';
// if ('Moulali' == str) {
//   console.log('Equal');
// } else {
//   console.log('Not equal');
// }

// //concat operator
// let str = 'apple';
// let st2 = 'fruit';
// let st3 = str.concat(st2);
// console.log(st3);
// let st4 = str.concat(' ', st2);
// console.log(st4);

// //substring
// let str = 'This is javascript tutorial. It is a good tutorial';
// let substr = str.substr(8, 19); //8 is start character ,  19 is the length of string from 8th charcater
// console.log(substr); //javascript tutorial

// //substring
// let st1 = 'This is javascript tutorial. It is a good tutorial';
// let substring = st1.substring(8, 18); // 8 is start charcater , 18 is the end charcater index value
// console.log(substring); //javascript

// //to know from where a character or word is
// let str = 'This is javascript tutorial. It is a good tutorial';
// let position = str.indexOf('good');
// console.log(position); //37

// //if 2 are there then it will return first match

// let pos = str.indexOf('is', 10); //check 'is' from 10th index position
// console.log(pos);

// let pos2 = str.lastIndexOf('is'); //checks from back
// console.log(pos);

// let pos3 = str.lastIndexOf('z');
// console.log(pos3); //-1 which means it is not present in the string
// let pos4 = str.indexOf('x');
// console.log(pos4); //-1

// //trim -  remove spaces from front and back
// let str = '     This is javascript tutorial. It is a good tutorial    ';

// console.log(str.trim());
// console.log(str);

// //to remove space from start
// console.log(str.trimStart());
// //remove space from end
// console.log(str.trimEnd());

// //upper case and lowercase
// let str = 'This is javascript tutorial. It is a good tutorial';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// //replace
// let str = 'This is javascript tutorial. It is a good tutorial';
// let newStr = str.replace('good', 'best');
// console.log(str);
// console.log(newStr);
// // This is javascript tutorial. It is a good tutorial
// // This is javascript tutorial. It is a best tutorial

let str = 'This is javascript tutorial. It is a good tutorial';
let str1 = str.includes('html');
console.log(str1); //false

let str2 = str.includes('javascript');
console.log(str2); //true

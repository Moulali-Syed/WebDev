// let book1 = 'Math';
// let book2 = 'Physics';
// let book3 = 'Chemistry';
// let book4 = 'Javascript';

// console.log(book3);

// //array - we can store all variables in one
// let books = ['Math', 'physics', 'chemistry', 'javascript']; //2 ways to declare array
// console.log(books); //[ 'Math', 'physics', 'chemistry', 'javascript' ]

// let books1 = new Array('Math', 'phsics', 'chemistry', 'javascript');

// //access using the index - starts from 0
// console.log(books[1]); //physics

// let asset = [1, 3, 40, 100.1, 'math'];
// console.log(asset[3]); // 100.1

// //change an element in array
// asset[2] = 'hi';
// console.log(asset); //[ 1, 3, 'hi', 100.1, 'math' ]

// //check if given variable is array
// let book = ['Maths', 'Physics', 'Chemistry', 'Bio'];
// let book1 = 'Math';
// console.log(Array.isArray(book1)); //false
// console.log(Array.isArray(book)); //true

// //using split to convert text to array elements
// let text = 'This is a random text';
// let wordarray = text.split(' ');
// console.log(wordarray); //[ 'This', 'is', 'a', 'random', 'text' ]

// let warr = text.split('s');
// console.log(warr); //[ 'Thi', ' i', ' a random text' ]

//iterate array using forEach
let book = ['math', 'phsics', 'bio', 'computer science'];
book.forEach(myfun);

function myfun(value) {
  console.log(value);
}
/*
math
phsics
bio
computer science
*/

book.forEach((val) => console.log(val));
/*
math
phsics
bio
computer science
*/

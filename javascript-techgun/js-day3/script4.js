let book1 = 'Math';
let book2 = 'Physics';
let book3 = 'Chemistry';
let book4 = 'Javascript';

console.log(book3);

//array - we can store all variables in one
let books = ['Math', 'physics', 'chemistry', 'javascript']; //2 ways to declare array
console.log(books); //[ 'Math', 'physics', 'chemistry', 'javascript' ]

let books1 = new Array('Math', 'phsics', 'chemistry', 'javascript');

//access using the index - starts from 0
console.log(books[1]); //physics

let asset = [1, 3, 40, 100.1, 'math'];
console.log(asset[3]); // 100.1

//change an element in array
asset[2] = 'hi';
console.log(asset); //[ 1, 3, 'hi', 100.1, 'math' ]

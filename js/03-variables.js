// intro to variables
// varibales can store information
// we can use that information later
// we can change that information later

// decalre a variable

var firstName = 'Moula ali';

// variables names are case sensitive
//use variable
console.log(firstName);

//change a value
firstName = 'Moulali';

console.log(firstName);

//var doesnot give error though we are decalring a same name
var num = 10;
var num = 20;
// var doesnot throw error

// this below code will lead to error at the time of execution   , because by mistake we r giving different variable name and 2 different variables
//got created
lName = 'Syed';
console.log(lName);
lname = 'Apple';
console.log(lName);

// to avoid these type of errors we use strict mode , as first line in a js file
('use strict');

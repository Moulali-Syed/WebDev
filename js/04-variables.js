'use strict';

// now must use specify var
var firstName = 'Apple';

console.log(firstName);
// firstname = 'Shimla'; - now this error will be caught , by mistake we written mistake in firstName as firstname
//thus strict mode is useful in catching such errors

firstName = 'Shimla';
console.log(firstName);

/*

rules of variable declaration

1.cannot start a variable name with number // this will give error - var 1num = 10;

2.we can use only _ and $ , special characters only

    first_name
    first$name
    $firstName
    _firstName

3.u cannot use spaces
    first_name - snake case
    firstName - camel case

4.convention - start with small letter and use camelCase

*/

var val1 = 2;
console.log(val1 ** 3); //2^3

console.log(val1 ** 0.5); //2^0.5

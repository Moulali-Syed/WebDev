/*

winnig number 19

19 ur guess is right
17 too low

20 too high

*/

let winninNumber = 19;
// reads input in form of string
let userGuess = +prompt('Guess a number');

console.log(typeof userGuess, userGuess);

if (userGuess === winninNumber) {
  console.log('u r guess is rigth');
} else if (userGuess > winninNumber) {
  console.log('too high');
} else {
  console.log('too low');
}

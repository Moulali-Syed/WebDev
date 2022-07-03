// console.log('happy birthday to you ...');

// console.log('happy birthday to you ...');

function singHappyBirthday() {
  console.log('happy birthday to you ...');
}

singHappyBirthday();

function twoPlusFour() {
  console.log(2 + 4);
}

twoPlusFour();

//call /invoke /run - same

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(12, 09);
console.log(sum);

function sumThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}
const sumof3Nums = sumThreeNumbers(3, 9, 12);
console.log(sumof3Nums);

//odd or even
function checkOddEven(num) {
  if (num % 2 === 0) {
    return 'even';
  }
  return false;
}

console.log(checkOddEven(12));

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(3));

//take string input return 1st character
function firstChar(str) {
  return str[0];
}
console.log(firstChar('abc'));

//take array input , and a target number - to find in array
//then print index of target if target is present in array
function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findTarget([1, 2, 3, 4, 5], 3));
console.log(findTarget([1, 2, 3, 4, 5], 13));

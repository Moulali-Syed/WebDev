//till now we have seen function declaration
const singhappyBirthday = function () {
  console.log('happy birthday to you ...');
};

singhappyBirthday();
const sumthreeNums = function (num1, num2, num3) {
  console.log(num1 + num2 + num3);
};

sumthreeNums(1, 2, 3);

const isEven = function (num) {
  if (num % 2 === 0) {
    return 'even';
  }
  return 'odd';
};

isEven(12);

const firstChar = function (str) {
  return str[0];
};

firstChar('abc');

const findTarget = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
findTarget([12, 2, 1, 40, 9], 1);

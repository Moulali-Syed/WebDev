const singHappyBirthday = () => {
  console.log('happy birthday to you ..');
};

const sumNums = (num1, num2, num3) => {
  console.log(num1 + num2 + num3);
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'even';
  }
  return 'odd';
};

const firstChar = (str) => {
  console.log(str[0]);
};

const findTarget = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

singHappyBirthday();
sumNums(1, 2, 3);
console.log(isEven(12));

firstChar('namdmfn');
console.log(findTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 1], 2));

//filter method

const numbers = [1, 3, 1, 4, 5, 6];
const isEven = function (num) {
  return num % 2 === 0;
};

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

const oddNums = numbers.filter((num) => num % 2 !== 0);
console.log(oddNums);
//filter doesnot chnage our actual array , creates a new one

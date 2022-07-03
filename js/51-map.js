//map method
const numbers = [3, 1, 4, 1, 9, 12];
const squareNums = numbers.map((num) => {
  return num ** 2;
});

//map always creates a new array
console.log(squareNums);
console.log(numbers);

const users = [
  {
    firstName: 'apple',
    age: 1,
  },
  {
    firstName: 'banana',
    age: 2,
  },
  {
    firstName: 'grapes',
    age: 3,
  },
  {
    firstName: 'mango',
    age: 4,
  },
];

const userNames = users.map((user) => user.firstName);
console.log(userNames);
//map doesnot chnage our actual array , creates a new one

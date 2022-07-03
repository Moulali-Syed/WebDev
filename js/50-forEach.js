const numbers = [1, 2, 4, 1, 6, 7, 19];
function multiplyByTwo(number, index) {
  console.log('index is ', index);
  console.log(`${number}*2 = ${number * 2}`);
}
multiplyByTwo(numbers[0], 0);
multiplyByTwo(numbers[2], 2);

for (let i = 0; i < numbers.length; i++) {
  console.log(i);
  multiplyByTwo(numbers[i], i);
}

//forEach takes a call back function
numbers.forEach(multiplyByTwo);

console.log('================');
numbers.forEach((num, index) => console.log(num * 2, index));

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

users.forEach((user) => console.log(user.firstName));

for (let user of users) {
  console.log(user.firstName);
}

//forEach doesnot chnage our actual array , creates a new one

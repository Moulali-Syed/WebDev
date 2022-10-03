//generates a random number between 0 - 1 , can be 0.123 ... 0.999
let x = Math.random();
console.log(x);

//generate a random numebr between 0 to 9
let num = Math.floor(Math.random() * 10);
console.log(num);

//generate a random numebr between 0 to 10
let num1 = Math.floor(Math.random() * 11);
console.log(num1);

//generate a random numebr between 0 to 99
let num2 = Math.floor(Math.random() * 100);
console.log(num2);

//generate a random numebr between 0 to 100
let num3 = Math.floor(Math.random() * 100);
console.log(num3);

//generate a random numebr between 1 to 10
let num4 = Math.floor(Math.random() * 10) + 1;
console.log(num4);

//generate a random number between given range
let maxNum = 25;
let minNum = 15;
let reqNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
console.log(reqNum);

function getRandom(min, max) {
  let x = Math.floor(Math.random() * (max - min)) + min;
  return x;
}

console.log(getRandom(10, 20)); //10 included and 20 is not included

function getRandom1(min, max) {
  let x = Math.floor(Math.random() * (max - min + 1)) + min;
  return x;
}

console.log(getRandom1(10, 20)); //10 included and 20 is  included

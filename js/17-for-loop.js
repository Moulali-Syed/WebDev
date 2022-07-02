for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//console.log('value of i is ' + i); //uncaught reference error , cannot access outside loop because dwcalred with let

for (var j = 0; j <= 10; j++) {
  console.log(j);
}
console.log('value of j is ' + j);

let k = 0;
for (; k <= 10; k++) {}

let sum = 0;
let n = 10;
for (let i = 0; i <= n; i++) {
  sum += i;
}
console.log(sum);

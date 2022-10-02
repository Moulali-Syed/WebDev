/*
we have user defind and predfined functions

predefined like alert();
*/

function mulTab(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num}*${i} = ${num * i}`);
  }
}

mulTab(2);

/*
2*1 = 2
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
2*6 = 12
2*7 = 14
2*8 = 16
2*9 = 18
2*10 = 20
*/

function add(num1, num2) {
  console.log(num1 + num2);
}

add(2, 3); //5

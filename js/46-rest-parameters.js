// rest parameters - if we want to pass any number of parameters

function myFunc(a, b, c, ...d) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);

  console.log(`d is ${d}`);
  console.log(d);
}

myFunc(1, 2, 3, 9, 4);

const addAll = (...num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
};
addAll(1, 2, 3, 4, 5);

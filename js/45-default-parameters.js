function addTwo(a, b) {
  if (typeof b === 'undefined') {
    b = 0;
  }
  return a + b;
}

const ans = addTwo(4);
console.log(ans); //4

function sum(a, b = 0) {
  return a + b;
}
console.log(sum(32, 32));

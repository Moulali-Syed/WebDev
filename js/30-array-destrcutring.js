const myArray = ['val1', 'val2'];
let a = myArray[0];
let b = myArray[1];
console.log(a, b);

let [c, d] = myArray;
console.log(c, d);

let [n, m, k] = myArray;
console.log(n, m, k); //k will be undefined

const arr = [1, 2, 3];
let [r, , t] = arr;
console.log(r, t);

//create a new array
let myNewArr = arr.slice(1);

let [w, e, ...newArr] = arr;
console.log(w, e, newArr);

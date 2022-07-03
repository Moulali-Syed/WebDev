let fruits = ['apple', 'banana', 'mango'];
console.log(fruits);

fruits.push('grapes');
console.log(fruits);
//array is mutable , that is it changes the actual array

// console.log(fruits.pop()); //removes last element , and return the last element
let poppedFruit = fruits.pop();
console.log(fruits);
console.log('popped fruit is ', poppedFruit);

//unshift - add element at start
fruits.unshift('jackfruit');
console.log(fruits);

//shift - remove element from start
let removedFruit = fruits.shift(); //remove first element and returns it
console.log(fruits);

//push , pop are fast compared to shift and unshift
//push ,pop adding ,removing from end
//shift , unshift remove add at begining , thus all index numbers have to shift

//primitive type

let num1 = 6;
let num2 = num1;
console.log(num1); //6
console.log(num2); //6

num1++;
console.log(num1); //7
console.log(num2); //6

//reference type
//array
let array1 = ['item1', 'item2'];
let array2 = array1;
console.log(array1); //['item1', 'item2']
console.log(array2); //['item1', 'item2'];

array1.push('item3');
console.log(array1); //['item1', 'item2', 'item3']
console.log(array2); //['item1', 'item2', 'item3']

/*

primitive variables are stored in stack
each variable will get different space


reference type 
array will be stored in heap memory , a pointer will be stored in stack
when we say array2 = array1 , 2 pointers will be created in stack , both will point to same memory 
location in heap memory

*/

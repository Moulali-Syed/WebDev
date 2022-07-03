let array1 = ['item1', 'item2'];
let array2 = array1;

console.log(array1 === array2);

//clone array
array2 = array1.slice(0); //slice starts from 0 index and goes till end , fast

array2 = [].concat(array1);

//spread operator - to clone array
array2 = [...array1];

//concat
array2 = array1.slice(0).concat(['item3', 'item4']);
array2 = [].concat(array1, ['item3', 'item4']);

array2 = [...array1, 'item3', 'item4'];

let oneMoreArray = ['a', 'b'];
array2 = [...array1, ...oneMoreArray];

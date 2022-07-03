//splice
//start , delete , insert

const myArr = ['item1', 'item2', 'item3'];

//delete
const deletedItem = myArr.splice(1, 1);
console.log(deletedItem); //['item2']
console.log(myArr);
//(2) ['item1', 'item3']

//insert
myArr.splice(1, 0, 'inserted item');
console.log(myArr);
// ['item1', 'inserted item', 'item3']

//delete and insert
const deletedItems = myArr.splice(1, 2, 'apple', 'banana');
console.log(deletedItems); //(2) ['inserted item', 'item3']
console.log(myArr);
//(3) ['item1', 'apple', 'banana']

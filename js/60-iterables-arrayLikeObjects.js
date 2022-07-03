//iterables - on which we can apply for of loop are iterables[array, string]

const firstName = 'Apple';
for (let char of firstName) {
  console.log(char);
}

const items = ['a', 'b', 'c'];
for (let item of items) {
  console.log(item);
}

const users = {
  key1: 'value1',
  key2: 'value2',
};

//object is not iterable , we cannot apply for of loop on object

//array like objects
//which has length property and can be accessed using index
//example - string

const lName = 'Shimla';
console.log(lName.length);
console.log(lName[2]);

const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];

const newArr = [...arr1, ...arr2];
console.log(newArr);

const newarr1 = [...'123456667777'];
console.log(newarr1);

//spread operator in object
const obj1 = {
  key1: 'value1',
  key2: 'value2',
  key1: 'valu3', //overrides the value1
};

const obj2 = {
  key3: 'val4',
  key4: 'val5',
};
console.log(obj1);

const newObj = { ...obj1, ...obj2, key9: 'val9' };
console.log(newObj);

const newObj1 = { ...'abc' };
console.log(newObj1); //{0: 'a', 1: 'b', 2: 'c'}

const newObj2 = { ...['item1', 'item2'] };
console.log(newObj2);

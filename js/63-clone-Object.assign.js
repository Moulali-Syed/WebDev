const obj = {
  key1: 'val1',
  key2: 'val2',
};

const obj2 = obj;
obj.key3 = 'value3';
console.log(obj);
console.log(obj2);

//but if we clone then obj2 will not chnage as above its changing
const obj3 = { ...obj };

const obj4 = Object.assign({}, obj);

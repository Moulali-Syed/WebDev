const user = {
  fName: 'apple',
  address: { houseNumber: '1234' },
};

console.log(user.fName);
console.log(user.address.houseNumber);

//if we are trying to access from undefined

const user1 = {
  fName: 'apple',
  //   address: { houseNumber: '1234' },
};

console.log(user1.houseNumber); //undefined
console.log(user1.address.houseNumber); //64-optionalChaining.js:15 Uncaught TypeError: Cannot read properties of undefined (reading 'houseNumber')

//use optional checking

console.log(user1?.houseNumber); //undefined
console.log(user1?.address?.houseNumber); //undefined

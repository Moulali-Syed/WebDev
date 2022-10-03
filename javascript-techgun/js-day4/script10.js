//netsed object

var user = {
  id: 101,
  email: 'abc@gmail.com',
  personalinfo: {
    name: 'abc',
    address: {
      street: 'dsgs',
      city: 'delhi',
      country: 'India',
    },
  },
};

console.log(user);
console.log(user.personalinfo.address);
console.log(user.personalinfo.address.city);

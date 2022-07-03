// 36 - object - inside - array.js;
//very useful in real world applications

const users = [
  { userId: 1, firstName: 'apple', city: 'Shimla' },
  { userId: 2, firstName: 'banana', city: 'Goa' },
  { userId: 3, firstName: 'mango', city: 'hyderabad' },
];

for (let user of users) {
  console.log(user);
  console.log(user.firstName);
}
